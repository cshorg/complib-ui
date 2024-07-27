import { Button, Input } from "complib-ui"

function App() {
  return (
    <>
      <Button>testing</Button>
      <Input
        type="text"
        placeholder="Username"
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  )
}

export default App
