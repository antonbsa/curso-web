import Main from "../templates/Main";

export default function Home(props) {
  return (
    <Main icon="home" title="Início"
      subtitle="Segundo projeto do capítulo react">
      <div className="display-4">Bem vindo!</div>
      <hr />
      <p className="mb-0">Textinho maneiro</p>
    </ Main>
  );
}
