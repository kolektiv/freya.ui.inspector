define([
  'utils/Search'
], function (Search) {
  return {
    baseUrl: Search.getOrDefault('baseUrl', window.location.href + '/api')
  };
});
