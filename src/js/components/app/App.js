define([
  'lib/marty',
  'lib/react',
  'components/app/Header',
  'components/app/Data'
], function (Marty, React, Header, Data) {
  return React.createClass({
    render: function() {
      return (
        <div>
          <Header />
          <Data />
        </div>
      );
    }
  });
});
