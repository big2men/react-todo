var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <h1 className="header__heading">
          {this.props.children}
        </h1>
      </header>
    );
  }
});

module.exports = Header;
