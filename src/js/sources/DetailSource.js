define([
  'lib/marty',
  'actions/DetailActions',
  'utils/Url'
], function (Marty, Detail, Url) {
  return Marty.createStateSource({
    type: 'http',
    baseUrl: Url.baseUrl,
    getDetail: function (id) { 
      return this.get('/records/' + id).then(function (res) {
        Detail.receiveDetail(id, res.body);
      });
    }
  });
});
