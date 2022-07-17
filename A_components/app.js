import componentA from './componentA'
import componentB from './componentB'

new Vue({
  el: '#app',
  components: {
    'component-a': componentA,
    'component-b': componentB,
  },
})
