define([
  'lib/marty',
  'stores/DetailStore',
  'stores/ExtensionStore',
  'stores/HeaderStore',
  'stores/NavigationStore'
], function (Marty, Detail, Extension, Header, Navigation) {
  return Marty.createStateMixin({
    listenTo: [
      Detail,
      Extension,
      Header,
      Navigation
    ],
    getState: function () {
      var navigation = {
        detail: Navigation.selectedDetail(),
        extension: Navigation.selectedExtension()
      };

      var data = {
        headers: Header.getHeaders(),
        detail: navigation.detail
          ? Detail.getDetail(navigation.detail)
          : undefined,
        extension: (navigation.detail && navigation.extension)
          ? Extension.getExtension(navigation.detail, navigation.extension)
          : undefined
      };

      return {
        navigation: navigation,
        data: data
      };
    }
  });
});
