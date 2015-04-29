define([
  'lib/react'
], function (React) {
  return React.createClass({
    render: function () {
      this.props.data.when({
        done: function (data) {
          console.log('data', data);
        },
        pending: function () {},
        failed: function (e) {}
      });
      
      return <p>Machine</p>;
    }
  });
});
