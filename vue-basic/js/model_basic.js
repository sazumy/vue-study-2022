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
      <input 
        type="text" v-bind:value="modelValue"
        v-on:input="$emit('update:modelValue', $event.target.value)" />
    </label>`
  })
  .mount('#app');
