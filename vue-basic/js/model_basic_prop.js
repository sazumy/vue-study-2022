Vue
  .createApp({
    data() {
      return {
        message: ''
      }
    }
  })
  .component('my-input', {
    props: [ 'modelValue' ],
    emits: [ 'update:modelValue' ],
    template: `<label>
      名前：
      <input type="text" v-model="internalValue" />
    </label>`,
    computed: {
      internalValue: {
        get() {
          return this.modelValue;
        },
        set(inputValue) {
          if (this.modelValue !== inputValue) {
            this.$emit('update:modelValue', inputValue)
          }
        }
      }
    }
  })
  .mount('#app');
