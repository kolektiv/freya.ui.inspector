define([
  'lib/marty',
  'actions/HeaderActions',
  'utils/Url'
], function (Marty, Header, Url) {
  return Marty.createStateSource({
    type: 'http',
    baseUrl: Url.baseUrl,
    getHeaders: function () {
      return this.get('/records').then(function (res) {
        Header.receiveHeaders(res.body);
      });
    }
  });
});
