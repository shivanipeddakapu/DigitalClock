import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.clock = React.createRef();
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.clock.current.innerText = new Date().toLocaleTimeString('en-US', { hour12: true });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div id="container">
        <h1 ref={this.clock}>{new Date().toLocaleTimeString('en-US', { hour12: true })}</h1>
      </div>
    );
  }
}

export default App;
