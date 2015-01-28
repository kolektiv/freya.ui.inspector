define([
  'lib/marty',
  'constants/HeaderConstants'
], function (Marty, Header) {
  return Marty.createActionCreators({
    receiveHeaders: Header.receiveHeaders(function (data) {
      this.dispatch(data);
    })
  });
});
