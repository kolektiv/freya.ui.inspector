define([
  'lib/marty',
  'constants/NavigationConstants'
], function (Marty, Navigation) {
  return Marty.createActionCreators({
    selectDetail: Navigation.selectDetail(function (id) {
      this.dispatch(id);
    }),
    selectExtension: Navigation.selectExtension(function (ext) {
      this.dispatch(ext);
    })
  });
});
