define([
  'lib/moment',
  'lib/react',
  'actions/NavigationActions'
], function (Moment, React, Navigation) {
  return React.createClass({
    select: function () {
      Navigation.selectDetail(this.props.header.id);
    },    
    render: function () {
      var date = new Date(this.props.header.timestamp);
      
      return (
        <tr className="select" onClick={this.select}>
          <td>{this.props.header.id.substring(0,8)}</td>
          <td className="timestamp">{Moment(date).format('HH:mm:ss.SSS')}</td>
        </tr>
      );
    }
  });
});
