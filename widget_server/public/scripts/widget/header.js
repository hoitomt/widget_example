define(['../lib/jquery-1.9.1.min', '../lib/underscore-min'], function() {

  (function() {
    console.log("Load Header...");
    console.log("Jquery is loaded:", typeof($) === 'undefined' ? 'false' : 'true');
    console.log("Underscore is loaded:", typeof(_) === 'undefined' ? 'false' : 'true');
  })();

  function Header(params) {
    console.log("Init Header");
    this.params = params;
  }

  Header.prototype.render = function() {
    console.log("Render Header", this.params);
    var html = '<div>Header Render</div>';
    return html;
  }

  return {
    init: function(params) {
      var h = new Header(params)
    },
    render: function(params) {
      var h = new Header(params)
      return h.render();
    }
  }
});
