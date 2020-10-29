
import React,{useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountrySelector.module.css';
import {fetchCountries} from '../../api';






const CountrySelector = ({handleCountryChange}) => {
     const [fetchedCountries, setFechedCountries] = useState([]);


     useEffect(() => {
         const fetchAPI = async () => {
            setFechedCountries(await fetchCountries());
         }

         fetchAPI();
     },[setFechedCountries]);

    return (
        <FormControl className={styles.FormControl}>
           <NativeSelect  className={styles.countries} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Pesquisar por país</option>
               {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
        </FormControl>
    )
}


export default CountrySelector;