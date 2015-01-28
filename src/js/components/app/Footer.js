define([
  'lib/react'
], function(React) {
  return React.createClass({
    render: function () {
      return (
        <footer>
          <p>
          <strong>Note:</strong> The Freya Inspector is pre-release software. Please report issues/suggestions/(pull request!) through <a href="https://github.com/freya-fs/freya.tools.inspector">GitHub</a>.
          </p>
        </footer>
      );
    }
  });
});
