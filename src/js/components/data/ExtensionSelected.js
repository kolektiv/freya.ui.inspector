define([
  'lib/react'
], function (React) {
  return React.createClass({
    render: function () {      
      return (
        <tr className="selected">
          <td>{this.props.ext}</td>
        </tr>
      );
    }
  });
});
