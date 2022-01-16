import { Component } from "react";
import axios from 'axios';
import Main from "../templates/Main";

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuŕio: Adicionar, listar, alterar e excluir'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
  user: {
    name: '',
    email: '',
  },
  list: [],
}

export default class UserCrud extends Component {
  state = { ...initialState };

  componentDidMount() {
    axios(baseUrl).then(resp => {
      const { data: list } = resp;
      this.setState({ list });
    })
  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user)
      .then(resp => {
        const { data } = resp;
        const list = this.getUpdatedList(data);
        this.setState({ user: initialState.user, list });
      });
  }

  getUpdatedList(user, shouldAdd = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    if (shouldAdd) list.unshift(user);
    return list;
  }

  updateField(event) {
    console.log('chamando')
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome:</label>
              <input type="text" className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome..." />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail:</label>
              <input type="text" className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o e-mail..." />
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary"
            onClick={e => this.save(e)}>
            {this.state.user.id
              ? 'Salvar'
              : 'Criar'}
          </button>

          <button className="btn btn-secondary ml-2"
            onClick={e => this.clear(e)}>
            Cancelar
          </button>
        </div>
      </div>
    )
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  }

  renderRows() {
    return this.state.list.map(user => {
      const { id, name, email } = user;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}