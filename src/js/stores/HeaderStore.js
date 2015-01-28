define([
  'lib/immutable',
  'lib/marty',
  'constants/HeaderConstants',
  'sources/HeaderSource'
], function (Immutable, Marty, HeaderConstants, HeaderSource) {
  return Marty.createStore({
    name: 'Header',
    handlers: {
      receiveHeaders: HeaderConstants.receiveHeaders
    },
    getInitialState: function () {
      return Immutable.List();
    },
    receiveHeaders: function (data) {
      this.state = Immutable.List(data);
    },
    getHeaders: function () {
      return this.fetch({
        id: 'headers',
        locally: function () {
          return this.hasAlreadyFetched('headers')
            ? this.state.toArray()
            : undefined;
        },
        remotely: function () {
          return HeaderSource.getHeaders();
        }
      });
    }
  });
});
