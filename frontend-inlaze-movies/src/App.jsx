import { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRouter } from "./routes/Router"
import Spinner from "./components/spinner/Spinner"

function App() {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </Router>
  )
}

export default App
