import { Component } from "react";

class Saudacao extends Component {
  constructor(props) {
    super(props);

    this.setType = this.setType.bind(this);

    this.state = {
      type: this.props.type,
      name: this.props.name,
    }
  }

  setType(e) {
    this.setState({ type: e.target.value })
  }

  setName(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    const { type, name } = this.state;

    return (
      <>
        <h1>{type} {name}!</h1>
        <hr />
        <input type="text" placeholder="Tipo.."
          value={type} onChange={this.setType} />
        <input type="text" placeholder="Nome.."
          value={name} onChange={e => this.setName(e)} />
      </>
    )
  }
}

export default Saudacao;