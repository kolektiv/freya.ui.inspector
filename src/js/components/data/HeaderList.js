define([
  'lib/react',
  'components/data/Header',
  'components/data/HeaderSelected'
], function (React, Header, HeaderSelected) {
  return React.createClass({
    render: function () {
      var props = this.props;

      return props.headers.when({
        done: function (headers) {
          return (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {headers.map(function (header) {
                  if (header.id == props.selected) {
                    return <HeaderSelected key={header.id} header={header} />;
                  } else {
                    return <Header key={header.id} header={header} />;
                  }
                })}
              </tbody>
            </table>
          );
        },        
        pending: function () {
          return <p className="loading">Record Retrieval Pending</p>;
        },        
        failed: function (e) {
          return <p className="error">{e.message}</p>;
        }
      });
    }   
  });
});
