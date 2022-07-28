Vue.createApp({
  data() {
    return {
      message: 'Hello World!'
    };
  },
  mounted() {
    this.message = '初めまして！';
    console.log(this.$el.textContent.includes(this.message))
    this.$nextTick(() => {
      console.log(this.$el.textContent.includes(this.message))
    })
  }
}).mount('#app');
