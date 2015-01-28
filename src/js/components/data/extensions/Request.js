define([
  'lib/react'
], function (React) {
  return React.createClass({
    render: function () {
      return this.props.data.when({
        done: function (data) {          
          return (
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="property">method</td>
                  <td className="value">{data.method}</td>
                </tr>
                <tr>
                  <td className="property">path</td>
                  <td className="value">{data.path}</td>
                </tr>
              </tbody>
            </table>
          );
        },
        pending: function () {
          return <p className="loading">Data Loading</p>;
        },
        failed: function (e) {
          return <p className="error">{e.message}</p>;
        }
      });
    }
  });
});
