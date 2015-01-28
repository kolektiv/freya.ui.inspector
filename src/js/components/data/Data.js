define([
  'lib/react',
  'components/data/extensions'
], function (React, Extensions) {
  return React.createClass({
    render: function () {
      return (
        <section id="data">
          <h1>Data</h1>
          <div id="extension">
            <Extensions data={this.props.data} selected={this.props.selected} />
          </div>
        </section>
      );
    }
  });
});
