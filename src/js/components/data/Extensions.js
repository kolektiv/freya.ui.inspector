define([
  'lib/react',
  'components/data/extensions/machine',
  'components/data/extensions/request'
], function (React, Machine, Request) {
  var extensions = {
    machine: Machine,
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
  
