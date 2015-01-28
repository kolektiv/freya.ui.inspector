define([], function () {
  return {
    getOrDefault: function (name, def) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      
      return results === null
        ? def
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };
});
