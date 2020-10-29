import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import  CountUp from 'react-countup';
import cx from 'classnames';






const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return ( <h1>Carregando...</h1>);
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" className={styles.mainGrid}>
               <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   {/* CARD CONFIRMED   */}
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom><p>Total de Infectados</p></Typography>
                       <Typography variant="h4">
                           <CountUp start={0} end={confirmed.value} duration={3.5} separator={"."}/>
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                   </CardContent>
               </Grid>  
                   {/* CARD RECOVERED    */}
                   <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom><p>Total de Recuperados</p></Typography>
                       <Typography variant="h4">
                           <CountUp start={0} end={recovered.value} duration={3.5} separator={"."}/>
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                   </CardContent>
               </Grid> 
                   {/*    CARD DEATHS */}
                   <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom><p>Total de Mortos</p></Typography>
                       <Typography variant="h4">
                           <CountUp start={0} end={deaths.value} duration={3.5} separator={"."}/>
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
                   </CardContent>
               </Grid> 
            </Grid>
        </div>
    )
}


export default Cards;