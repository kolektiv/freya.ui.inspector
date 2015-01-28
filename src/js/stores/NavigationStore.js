define([
  'lib/immutable',
  'lib/marty',
  'constants/NavigationConstants'
], function (Immutable, Marty, Navigation) {
  return Marty.createStore({
    name: 'Navigation',
    handlers: {
      selectDetail: Navigation.selectDetail,
      selectExtension: Navigation.selectExtension
    },
    getInitialState: function () {
      return Immutable.Map({
        detail: undefined,
        extension: undefined
      });
    },
    selectDetail: function (id) {
      this.state = this.state.set('detail', id);
    },
    selectExtension: function (ext) {
      this.state = this.state.set('extension', ext);
    },
    selectedDetail: function () {
      return this.state.get('detail');
    },
    selectedExtension: function () {
      return this.state.get('extension');
    }
  });
});
