import { StrictMode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import { Routes } from "./routes"

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StrictMode>
  )
}

export default App
