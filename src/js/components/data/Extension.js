define([
  'lib/react',
  'actions/NavigationActions'
], function (React, Navigation) {
  return React.createClass({
    select: function () {
      Navigation.selectExtension(this.props.ext);
    },    
    render: function () {      
      return (
        <tr className="select" onClick={this.select}>
          <td>{this.props.ext}</td>
        </tr>
      );
    }
  });
});
