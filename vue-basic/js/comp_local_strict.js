const MyChild = {
  template: `<div>こんにちは、Comp2！</div>`
};

// ↓これだと my-childを呼び出せない
// const MyParent = {
//   template: `
//     <div>こんにちは、Comp1！</div>
//     <my-child />
//   `
// };

// ↓これだと呼び出せる
const MyParent = {
  components: {
    'my-child': MyChild,
  },
  template: `
    <div>こんにちは、Comp1！</div>
    <my-child />
  `
};

Vue.createApp({
  components: {
    'my-parent': MyParent,
    'my-child': MyChild,
  }
}).mount('#app');
