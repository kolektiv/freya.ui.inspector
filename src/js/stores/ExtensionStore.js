define([
  'lib/immutable',
  'lib/marty',
  'constants/ExtensionConstants',
  'sources/ExtensionSource'
], function (Immutable, Marty, ExtensionConstants, ExtensionSource) {
  return Marty.createStore({
    name: 'Extension',
    handlers: {
      receiveExtension: ExtensionConstants.receiveExtension
    },
    getInitialState: function () {
      return Immutable.Map();
    },
    receiveExtension: function (id, ext, data) {
      this.state = this.state.setIn([id, ext], data);
    },
    getExtension: function (id, ext) {      
      return this.fetch({
        id: id + ext,
        locally: function () {
          return this.hasAlreadyFetched(id + ext)
            ? this.state.getIn([id, ext])
            : undefined;
        },
        remotely: function () {
          return ExtensionSource.getExtension(id, ext);
        }
      });
    }
  });
});
