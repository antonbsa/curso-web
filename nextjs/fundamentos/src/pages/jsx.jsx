import Layout from "../components/Layout";

export default function JSX(props) {
  const title = <h1>Title</h1>;

  function subtitle() {
    return <h2>{'very nice'.toUpperCase()}</h2>
  }

  return (
    <Layout title="Learning JSX">
      {title}
      {subtitle()}
      <p>
        {JSON.stringify({ name: 'João', age: 30 })}
      </p>
    </Layout>
  )
}