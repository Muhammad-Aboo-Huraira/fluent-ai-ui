import { BrowserRouter } from "react-router-dom";
import './App.css'
import RoutesIndex from "./Routes/RoutesIndex";
import "@fontsource/outfit"

function App() {

  return (
    <>
    <BrowserRouter>
      <RoutesIndex />
    </BrowserRouter>
    </>
  )
}

export default App
