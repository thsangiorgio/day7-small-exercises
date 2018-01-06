var Com = React.createClass({
  add: function() {
    this.setState({
      num: parseInt(this.state.num) +1
    });
  },
  getInitialState: function() {
    return {num: 0}
  },
  render() {
    return(
      <button onClick ={this.add}>Hello {this.state.num}</button>
    )
  }
});

ReactDOM.render(<Com />, document.getElementById('root'));
