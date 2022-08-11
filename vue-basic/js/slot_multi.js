Vue.createApp({})
  .component('my-slot', {
    template: `<div>
      <header>
        <slot name="header">DEFAULT HEADER</slot>
      </header>
      // slot名を指定しなかった部分がここに入る
      <div>
        <slot>DEFAULT MAIN</slot>
      </div>
      <footer>
        <slot name="footer">DEFAULT FOOTER</slot>
      </footer>
    </div>`
  })
  .mount('#app');
