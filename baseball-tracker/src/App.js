import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  }

  // add functions for baseball batter rules
  // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  // balls and strikes reset to 0 when a hit is recorded.
  // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike.
  // With 1 strike, a foul makes it 2 strikes.
  // With two strikes a foul has no effect, count stays at 2 strikes.
  
  onStrike = () => {
    if (this.state.strikes + 1 > 2) {
      this.setState({ strikes: 0 })
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  }

  


//  onBall
//  onFoul
//  onHit



render() {
  return (
    <div className="App">
    </div>
  );
}

};

export default App;
