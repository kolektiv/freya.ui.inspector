define([
  'lib/immutable',
  'lib/marty',
  'constants/DetailConstants',
  'sources/DetailSource'
], function (Immutable, Marty, DetailConstants, DetailSource) {
  return Marty.createStore({
    name: 'Detail',
    handlers: {
      receiveDetail: DetailConstants.receiveDetail
    },
    getInitialState: function () {
      return Immutable.Map();
    },
    receiveDetail: function (id, data) {
      this.state = this.state.set(id, data);
    },
    getDetail: function (id) {
      return this.fetch({
        id: id,
        locally: function () {
          return this.hasAlreadyFetched(id)
            ? this.state.get(id)
            : undefined;
        },
        remotely: function () {
          return DetailSource.getDetail(id);
        }
      });
    }
  });
});
