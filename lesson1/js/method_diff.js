new Vue({
  el: '#app',
  data: {
    current: new Date().toLocaleString()
  },
  computed: {
    //算出プロパティ経由で乱数を取得
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    //クリック時に処理を行う
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    // メソッド経由で乱数を取得
    randomm: function() {
      return Math.random();
    }
  }
});
