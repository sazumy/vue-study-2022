Vue.createApp({
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onplus(e) {
      this.current += e;
    },
    onmounted(e) {
      console.log(e);
    }
  }
})
.component('my-counter', {
  props: ['step'],
  emits: ['plusMinus'],
  // onclickはキャメルでもかける。ただし、methodsとメソッド名は揃える
  template: `<button type="button" @click="onclick">
    {{ step }}
  </button>`,
  methods: {
    onclick() {
      // 第一引数にイベント名、第二引数に親コンポーネントに引き渡すデータ
      this.$emit('plusMinus', Number(this.step)) // Numberを入れないと、文字列として追加され、どんどん文字数が増えていく
    }
  }
})
.mount('#app');
