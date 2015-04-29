define([
  'lib/marty',
  'lib/react',
  'components/app/Header',
  'components/app/Data',
  'components/app/Footer'
], function (Marty, React, Header, Data, Footer) {
  return React.createClass({
    render: function() {
      return (
        <div>
          <Header />
          <Data />
          <Footer />
        </div>
      );
    }
  });
});
