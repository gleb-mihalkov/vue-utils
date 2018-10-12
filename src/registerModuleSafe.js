import isModuleExists from './isModuleExists'

export default (store, namespace, options) => {
  if (isModuleExists(store, namespace)) {
    return
  }

  store.registerModule(namespace, options)
}
