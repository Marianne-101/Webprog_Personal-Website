const app2 = Vue.createApp({
    data() {
      return {
        text: ''
      }
    },
    methods: {
      changeText() {
        this.text = 'Thank you for getting to know Me!'
      }
    }
  })
 app2.mount('#app2')
