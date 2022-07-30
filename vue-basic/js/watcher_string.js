Vue.createApp({
    data() {
      return {
        name: 'hoge',
        age: 23
      }
    },
    watch: {
      name: 'nameChanged', // 文字列を指定すると同名のメソッドを実行する
      age: [
        (newVal, oldVal) => {
          console.log('年齢が変わったよ１')
        },
        (arg1, arg2) => {
          console.log('年齢が変わったよ２')
        }
      ] // 配列で書くと処理を順番に１つずつ実行する
    }, methods: {
      nameChanged(newVal, oldVal) {
        console.log('名前が変わったよ')
      }
    }
  }).mount('#app');
