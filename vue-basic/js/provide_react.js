Vue.createApp({})
  .component('my-parent', {
    data() {
      return {
        title: 'Vue 3実践入門'
      };
    },    
    provide() {
      return {
        title: Vue.computed(() => this.title)
      }
    },
    // provide: {
    //   title: 'Vue 3実践入門'
    // },
    template: `
      <div id="parent">
        <input type="text" v-model="title" /> ← これはparent要素
        <my-my />
      </div>
    `
  })
  .component('my-my', {
    template: `
      <div id="my">
        <my-child />
      </div>
    `
  })
  .component('my-child', {
    inject: ['title'],
    template: `
      <div id="child">
        {{ title.value }}←親での変更が配下要素に伝わっている
      </div>
    `
  })
  .mount('#app');
