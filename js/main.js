'use strict';

{

  const likeComponent = Vue.extend({

    props: {
      id: {
        type: String,
      },
      text: {
        type: String,
        default: 'Good'
      },

    },

    data: function() {
      return {
        count: 0
      };
    },

    mounted: function() {
      this.count = localStorage.getItem(this.id);
    },
    
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
        localStorage.setItem(this.id, this.count);
      }
    },

    template: 
    '<button @click="countUp">{{ text }}: {{ count }}</button>',
  });

  const vm = new Vue({
    el: '#app',

    data: {
      total: 0,
    },


    mounted: function() {
      this.total = localStorage.getItem('total');
    },

    methods: {
      incrementTotal: function() {
        this.total++;
        localStorage.setItem('total', this.total);
      }
    },

    components: {
      'like-component': likeComponent
    },
  });
}