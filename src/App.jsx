import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="app-container">
      <h1>My Firebase Contact Book</h1>
      <Outlet />
    </div>
  )
}

export default App
