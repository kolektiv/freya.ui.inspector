define([
  'lib/react',
  'components/data/extensions/request'
], function (React, Request) {
  var extensions = {
    request: Request
  };
  
  return React.createClass({
    render: function () {
      var extension = this.props.selected
            ? extensions[this.props.selected]
            : undefined;
      
      if (extension) {
        return React.createElement(extensions[this.props.selected], {
          data: this.props.data
        });
      } else {
        return <p className="loading">No Data</p>;
      }
    }
  });
});
  
