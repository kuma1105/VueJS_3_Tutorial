console.log('hello, vue');

const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>',
  data() {
    return {
      url: 'https://www.naver.com',
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/cat1.jpg' },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/cat2.jpg' },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/cat3.jpg' },
      ]
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
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});

app.mount('#app');