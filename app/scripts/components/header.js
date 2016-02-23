var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <h1 className="header__heading">
          {this.children}
        </h1>
      </header>
    );
  }
});
