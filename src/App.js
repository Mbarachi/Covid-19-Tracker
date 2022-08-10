import React from "react";
import Cards from "./components/cards/Cards";
import CountryPicker from "./components/country-picker/CountryPicker";
import Chart from "./components/charts/Chart";
import styles from './App.module.css'
import { fetchData } from "./api";


class App extends React.Component {

  state = {
    data : {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }
  
  render() {
    return(
        <div className={styles.container}>
          <Cards data={this.state.data}/>
          <CountryPicker/>
          <Chart/>
        </div>
    ) 
  }
}

export default App