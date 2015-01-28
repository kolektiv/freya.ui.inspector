define([
  'lib/marty',
  'constants/ExtensionConstants'
], function (Marty, Extension) {
  return Marty.createActionCreators({
    receiveExtension: Extension.receiveExtension(function (id, ext, data) {
      this.dispatch(id, ext, data);
    })
  });
});
