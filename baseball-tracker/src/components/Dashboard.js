import React from 'react';

class Dashboard extends React.Component {

    render() {

        return (
            <div>
                <button onClick={this.props.onStrike}> Strike </button>
            </div>
        )
    }
}

export default Dashboard;