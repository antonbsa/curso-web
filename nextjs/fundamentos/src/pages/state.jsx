import { useState } from "react";
import Layout from "../components/Layout";

export default function State(props) {
  const [ number, setNumber ] = useState(0);

  function incrementNumber() {
    setNumber(number + 1)
  }

  return (
    <Layout title="Component with state">
      <span>{number}</span>
      <button onClick={incrementNumber}>Increment</button>
    </Layout>
  )
}