import React from  'react';
import {Cards, Chart, CountrySelector, Footer} from './components';
import styles from './App.module.css';
import { fetchData } from './api/';
import AppLogo from './images/image.png'


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData});
    }


  // FORNECE DADOS DO PAÍS SELECIONADO
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})
    }

 
     render(){
         const { data, country } = this.state;

         return (
            <div className={styles.container}>
                <img className={styles.applogo} src={AppLogo} alt="logo"/>
                <Cards data={data}/>
                <CountrySelector handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Footer/>
           </div>
         )
     }
}


export default App;