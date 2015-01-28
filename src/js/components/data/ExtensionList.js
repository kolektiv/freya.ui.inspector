define([
  'lib/react',
  'components/data/Extension',
  'components/data/ExtensionSelected'
], function (React, Extension, ExtensionSelected) {
  return React.createClass({
    render: function () {
      var props = this.props;

      if (props.detail) {
        return props.detail.when({
          done: function (detail) {
            return (
              <table>
                <thead>
                  <tr>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                {detail.extensions.map(function (ext) {
                  if (ext == props.selected) {
                    return <ExtensionSelected key={ext} ext={ext} />;
                  } else {
                    return <Extension key={ext} ext={ext} />;
                  }
                })}
                </tbody>
              </table>
            );
          },
          pending: function () {
            return <p className="loading">Detail Loading</p>;
          },
          failed: function (e) {
            return <p className="error">{e.message}</p>;
          }
        });
      } else {
        return <p className="loading">No Record</p>;
      };
    }
  });
});
