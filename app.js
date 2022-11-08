console.log('hello, vue');

const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>',
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },

  methods: {
    changeTitle(title) {
      console.log('you clicked me');
      // this.title = 'Words of Radiance';
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

app.mount('#app');