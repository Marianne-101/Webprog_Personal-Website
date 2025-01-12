const app = Vue.createApp({
    data() {
      return {
        text: ''
      }
    },
    methods: {
      changeText() {
        this.text = 'Hello World!'
      }
    }
  })
