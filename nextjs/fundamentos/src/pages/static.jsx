import Layout from "../components/Layout";

export async function getStaticProps() {
  return {
    props: {
      number: Math.random()
    }
  }
}

export default function Static(props) {
  const { number } = props;

  return (
    <Layout title="Static content">
      <div>{number}</div>
    </Layout>
  )
}