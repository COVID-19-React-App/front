import React from "react";
import logo from "./../../img/logo.gif";
import covidLoader from "./../../img/covidLoader.gif";
import CounterList from "./../../components/CounterList";
import statistic from "./../../store/statistic"

class Home extends React.Component {
    state = {
        isLoading: true,
        table: []
    }

    componentDidMount() {
        statistic.handleTotalStat(this)
    }

    render() {
        return (
            <div>
                <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
                {this.state.isLoading && (
                    <div
                        // TODO change className to loader
                        className="logo"
                        style={{ backgroundImage: `url(${covidLoader})` }}
                    />
                )}
                {!this.state.isLoading && <CounterList counters={this.state.table} />}
            </div>
        )
    }
}

export default Home;