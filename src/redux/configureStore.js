import { createStore } from 'redux'
import DevTools from './DevTools'
import rootReducer from './rootReducer'

export default function configureStore() {
  const finalCreateStore = DevTools.instrument()(createStore)
  const store = finalCreateStore(rootReducer)

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    )
  }

  return store
}
