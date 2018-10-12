import {
  mapMutations,
  mapActions,
  mapGetters,
  mapState
} from 'vuex'

import registerModuleSafe from './registerModuleSafe'

export default (namespace, options) => {
  const gettersKeys = Object.keys(options.getters || {})

  const stateKeys = Object.keys(options.state || {})
    .filter(key => gettersKeys.indexOf(key) < 0)

  const actionsKeys = Object.keys(options.actions || {})

  const mutationsKeys = Object.keys(options.mutations || {})
    .filter(key => actionsKeys.indexOf(key) < 0)

  return {
    created () {
      registerModuleSafe(this.$store, namespace, options)
    },

    computed: {
      ...mapGetters(namespace, gettersKeys),
      ...mapState(namespace, stateKeys)
    },

    methods: {
      ...mapMutations(namespace, mutationsKeys),
      ...mapActions(namespace, actionsKeys)
    }
  }
}
