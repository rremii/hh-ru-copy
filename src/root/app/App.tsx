import { withProviders } from "./providers"
import "./styles/style.scss"
import AppLayout from "./layout/AppLayout"
import { Navigation } from "./navigation"

function App() {
  return (
    <AppLayout>
      <Navigation />
    </AppLayout>
  )
}

export default withProviders(App)
