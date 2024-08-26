import './styles/global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'

import { Player } from './pages/player'
import { store } from './store'

export function App() {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <Helmet titleTemplate="Watching: %s " />
        <Player />
      </ReduxProvider>
    </HelmetProvider>
  )
}
