import React from "react";
import CounterList from "./../../components/CounterList";
import statistic from "./../../store/statistic"
import TitleBlock from "../../components/Title";
import Loader from "../../components/Loader";

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
      <div className='screen'>
        <TitleBlock title='COVID-19' subtitle='REACT APP'/>
        {this.state.isLoading && (
          <Loader/>
        )}
        {!this.state.isLoading && <CounterList counters={this.state.table}/>}
      </div>
    )
  }
}

export default Home;