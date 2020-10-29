import React , { useState, useEffect }from 'react'
import { fetchDailyData} from '../../api';
import { Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';




const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async()=> {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

//  BARRA DO GRÁFICO PRINCIPAL
    const lineChart = (
        dailyData.length ? (
            <Line
             data={{
             labels: dailyData.map(({date}) => date),
             datasets: [{

                 data: dailyData.map(({confirmed}) => confirmed),
                 label: "Infectados",
                 borderColor: "rgba(255, 236, 3, 0.8)",
                 backgroundColor: "rgba(255, 236, 3, 0.8)",
                 fill: true,
                },{ 

                data: dailyData.map((data) => data.recovered),
                label: 'Recuperados',
                borderColor: 'rgba(0, 255, 0, 0.8)',
                backgroundColor: 'rgba(0, 255, 0, 0.8)',
                fill: true,

             },{

                data: dailyData.map(({deaths}) => deaths),
                 label:  "Mortos" ,
                 borderColor: "rgba(255, 3, 3, 0.8)",
                 backgroundColor: "rgba(255, 3, 3, 0.8)",
                 fill: true,
             }],
             }}

            />) : null
    );

//   QUANDO PAÍS É SELECIONADO MASTRA UMA NOVA BARRA DO GRÁFICO
    const barChart = (
        confirmed ?
        (<Bar data={{
           labels: ["Infectados", "Recuperados", "Mortos"],
           datasets: [{
            label:  "Pessoas",
            backgroundColor: [
                "rgba(255, 236, 3, 0.8)",
                "rgba(0, 255, 0, 0.8)",
                "rgba(255, 0, 0, 0.8)",
            ],
            data: [confirmed.value, recovered.value, deaths.value], 
           },], 
        }}
         options={{
          legend: { display: false},
          title: {display: true, text:
          `Estado Atual No(a) ${country}`},
         }}

       /> ) : null
    ); 


    return (
        <div className={styles.container}>
           {country ? barChart : lineChart}
        </div>
    )
}


export default Chart;