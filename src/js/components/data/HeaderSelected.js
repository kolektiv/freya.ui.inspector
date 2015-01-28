define([
  'lib/moment',
  'lib/react'
], function (Moment, React) {
  return React.createClass({   
    render: function () {
      var date = new Date(this.props.header.timestamp);
      
      return (
        <tr className="selected">
          <td>{this.props.header.id.substring(0,8)}</td>
          <td className="timestamp">{Moment(date).format('HH:mm:ss.SSS')}</td>
        </tr>
      );
    }
  });
});
