(function(global) {
  'use strict';

  global.app = {
    interval: 100,

    sum: function(a, b) {
      return a + b;
    },

    showMessage: function(message) {
      $('#message').text(message);
    },

    runCallback: function(callback) {
      setTimeout(callback, this.interval);
    },

    bind: function() {
      $('#button').on('click', function() {
        $('#message').text('click');
      });
    }
  };

  $(function() {
    app.bind();
  });
}(this.self));