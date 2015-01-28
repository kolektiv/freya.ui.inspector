define([
  'lib/react',
  'components/data/HeaderList'
], function (React, HeaderList) {
  return React.createClass({
    render: function () {
      return (
        <section id="headers">
          <h1>Record</h1>
          <HeaderList headers={this.props.headers} selected={this.props.selected} />
        </section>
      );
    }
  });
});
