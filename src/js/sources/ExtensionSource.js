define([
  'lib/marty',
  'actions/ExtensionActions',
  'utils/Url'
], function (Marty, Extension, Url) {
  return Marty.createStateSource({
    type: 'http',
    baseUrl: Url.baseUrl,
    getExtension: function (id, ext) {
      return this.get('/records/' + id + '/extensions/' + ext).then(function (res) {
        Extension.receiveExtension(id, ext, res.body);
      });
    }
  });
});
