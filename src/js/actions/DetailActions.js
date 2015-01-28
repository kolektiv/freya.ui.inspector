define([
  'lib/marty',
  'constants/DetailConstants'
], function (Marty, Detail) {
  return Marty.createActionCreators({
    receiveDetail: Detail.receiveDetail(function (id, data) {
      this.dispatch(id, data);
    })
  });
});
