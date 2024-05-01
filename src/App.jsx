import { useRoutes } from "react-router-dom";
import routes from "./routes";
import './App.css'


function App() {
  let element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  )
}

export default App
