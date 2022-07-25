Vue.createApp({})
  .component('my-counter', {
    props: ['init'],
    template: `<div>現在値は{{ current }}です！
      <input type="button" @click="onClick" value="増やす" /></div>`,
    setup(props, context) {
      const current = Vue.ref(props.init);
      const onClick = () => {
        current.value++;
      }

      return{
        current,
        onClick
      }
    }
})
.mount('#app');
