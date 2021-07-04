import React from "react";
import "./Countries.sass";
import statistic from "../../store/statistic";
import Loader from "../../components/Loader";
import TitleBlock from "../../components/Title";
import CountryList from "../../components/CountryList";
import MultipleSelect from "../../components/MultipleSelect";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null,
      filtered: null,
      isLoading: true,
      isFailed: false,
    }
  }

  filterCountries = ((options) => {
    let filtered = this.state.origin.filter(item => (options.includes(item.name)));
    this.setState({...this.state, ...{filtered: filtered}});
  })

  setOrigin = ((origin) => {
    this.setState({...this.state, ...{origin: origin}}, (() => {
      this.filterCountries(["USA", "Russia"])
    }));
  })

  setIsLoading = ((isLoading) => {
    this.setState({...this.state, ...{isLoading: isLoading}});
  })


  componentDidMount() {
    let err = statistic.handleCountriesStat(this.setOrigin, this.setIsLoading);
    if (err !== null) {
      console.log(err);
      this.setState({...this.state, ...{isFailed: true}});
    }
  }

  render() {
    return (
      <div className="countries">
        <TitleBlock title='COUNTRIES' subtitle='STATISTICS'/>
        {!this.state.isLoading && (
          <MultipleSelect onChange={this.filterCountries}
                          options={[this.state.origin.map((country) => (country.name))]}/>
        )}
        {this.state.isLoading && (
          <Loader/>
        )}
        {!this.state.isLoading && (
          <CountryList data={this.state.filtered}/>
        )}
      </div>
    )
  }


}

export default Countries;
