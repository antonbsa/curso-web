import Navigator from "../components/Navigator"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navigator text="Styled" to="/styled"/>
      <Navigator text="Example" to="/example" color="purple"/>
      <Navigator text="JSX" to="/jsx" color="crimson"/>
      <Navigator text="Navigation #01" to="/navigation" color="green"/>
      <Navigator text="Navigation #02" to="/client/rs/123" color="blue"/>
      <Navigator text="Component with state #02" to="/state"/>
      <Navigator text="API Integration" to="/integration" color="#66ff2e"/>
      <Navigator text="Static content" to="/static" color="#4a3b5c"/>
    </div>
  )
}
