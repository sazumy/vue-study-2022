import componentA from './componentA'
import componentB from './componentB'

Vue.component('button-component', {
  components: {
    'component-a': componentA,
    'component-b': componentB,
  },
  template: '<button @click="count++">You clicked me {{ count }} times.</button>'

})

new Vue({
  el: '#app'
})
