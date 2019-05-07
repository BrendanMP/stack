import Vue from 'vue'
import { debounce } from 'lodash/debounce';

import './styles.scss';

new Vue({
  el: '#app',
  methods: {
    handleScroll() {
      console.log('scrolling')
    }
  },
  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
})