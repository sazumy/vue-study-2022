Vue.createApp({})
  .component('my-counter', {
    props: [ 'init' ],
    template: `<div>現在値は{{ data.current }}です！
      <input type="button" @click="onClick" value="増やす" /></div>`,
    setup(props, context) {
      const data = Vue.reactive({
        current: props.init,
      });
      const onClick = () => {
        data.current++;
      };

      return {
        data,
        onClick
      }
    }
  })
  .mount('#app');
