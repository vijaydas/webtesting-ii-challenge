import React from 'react';
import './App.css';

import Display from './components/Display';

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
  };

  onBall = () => {
    if (this.state.balls + 1 > 3) {
      this.setState({ balls: 0 })
    } else {
      this.setState({ balls: this.state.balls + 1 });
    }
  };

  onFoul = () => {
    this.setState({ fouls: this.state.fouls + 1 });
    if (this.state.strikes < 2) {
      this.state({ strikes: this.state.strikes + 1 })
    }
  }

//  onBall
//  onFoul
//  onHit

onHit = () => {
  this.setState({ hits: this.state.hits + 1 });
  this.setState({ strikes: 0, balls: 0 })
}

render() {
  return (
    <div className="App">
        <Display batterStats={this.state} />

        {/* <Dashboard
          addStrike={this.addStrike}
          addBall={this.addBall}
          addFoul={this.addFoul}
          addHit={this.addHit} */}
        />

      </div>
  );
}

};

export default App;
