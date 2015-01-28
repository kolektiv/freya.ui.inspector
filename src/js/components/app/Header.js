define([
  'lib/react'
], function(React) {
  return React.createClass({
    render: function () {
      return (
        <header>
          <h1>Freya Inspector</h1>
          <nav>
            <ul>
              <li><a href="">Guide</a></li>
              <li><a href="">Issues</a></li>
              <li><a href="">Source</a></li>
            </ul>
          </nav>
        </header>
      );
    }
  });
});
