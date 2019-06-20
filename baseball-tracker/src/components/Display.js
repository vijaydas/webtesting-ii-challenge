import React from 'react';

class Display extends React.Component {

    componentDidMount () {
        this.props = this.props.state
    }

    render() {
        return (
            <div>
                <h1>Strikes: {this.props.batterStats.strikes}</h1>
                <h1>Balls: {this.props.batterStats.balls}</h1>
                <h1>Fouls: {this.props.batterStats.fouls}</h1>
                <h1>Hits: {this.props.batterStats.hits}</h1>
            </div>
        )
    }

}

export default Display;