import { createStore } from 'redux'
import DevTools from './DevTools'
import rootReducer from './rootReducer'

export default function configureStore() {
  const finalCreateStore = DevTools.instrument()(createStore)
  return finalCreateStore(rootReducer)
}
