import { withProviders } from "./providers"
import { Routing } from "./navigation"
import "./styles/style.scss"

function App() {
  return <Routing />
}

export default withProviders(App)
