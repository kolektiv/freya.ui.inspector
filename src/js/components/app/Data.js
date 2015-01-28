define([
  'lib/marty',
  'lib/react',
  'mixins/DataMixin',
  'components/data/Headers',
  'components/data/Detail',
  'components/data/Data'
], function (Marty, React, RootMixin, Headers, Detail, Data) {
  return React.createClass({
    mixins: [
      RootMixin
    ],
    render: function () {
      var d = this.state.data;
      var n = this.state.navigation;
      
      return (
        <div>
          <Headers headers={d.headers} selected={n.detail} />
          <Detail detail={d.detail} selected={n.extension} />
          <Data data={d.extension} selected={n.extension} />
        </div>
      );
    }
  });
});
    
