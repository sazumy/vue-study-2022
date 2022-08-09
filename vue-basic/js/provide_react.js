Vue.createApp({})
  .component('my-parent', {
    data() {
      return {
        title: 'Vue 3実践入門',
        book: {
          // オブジェクトはここのデータを書き換えると変更される
          title: 'test book2'
        }
      };
    },    
    provide() {
      return {
        title: Vue.computed(() => this.title),
        book: this.book
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
    inject: ['title', 'book'],
    template: `
      <div id="child">
        {{ title.value }}←親での変更が配下要素に伝わっている<br>
        {{ book.title }}
      </div>
    `
  })
  .mount('#app');
