define([
  'lib/react',
  'components/data/ExtensionList'
], function (React, ExtensionList) {
  return React.createClass({
    render: function () {
      return (
        <section id="detail">
          <h1>Detail</h1>
          <ExtensionList detail={this.props.detail} selected={this.props.selected} />
        </section>
      );
    }
  });
});
