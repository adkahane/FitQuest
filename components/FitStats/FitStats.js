import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import PureChart from 'react-native-pure-chart';
import styles from './FitStatsStyles.js';


class FitStats extends React.Component {


    render() {
        let sampleData = [
          
                 {
              seriesName: 'series1',
              data: [
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 200},
                {x: '2018-02-03', y: 170},
                {x: '2018-02-04', y: 250},
                {x: '2018-02-05', y: 10}
              ],
                  color: 'rgba(244, 49,229, 1)'
              
                },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-02-01', y: 20},
                {x: '2018-02-02', y: 100},
                {x: '2018-02-03', y: 140},
                {x: '2018-02-04', y: 550},
                {x: '2018-02-05', y: 40}
              ],
              color: 'rgba(44, 244, 250, 1)'
            }
              ];

        let exampleData = [
          
                 {
              seriesName: 'series1',
              data: [
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 200},
                {x: '2018-02-03', y: 170},
                {x: '2018-02-04', y: 250},
                {x: '2018-02-05', y: 10}
              ],
                  color: 'rgba(244, 49,229, 1)'
              
                },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-02-01', y: 20},
                {x: '2018-02-02', y: 100},
                {x: '2018-02-03', y: 140},
                {x: '2018-02-04', y: 550},
                {x: '2018-02-05', y: 40}
              ],
              color: 'rgba(44, 244, 250, 1)'
            }
            ];

        let testData = [
            {
              seriesName: 'series1',
              data: [
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 200},
                {x: '2018-02-03', y: 170},
                {x: '2018-02-04', y: 250},
                {x: '2018-02-05', y: 10}
              ],
              color: 'rgba(49, 111,244, 1)'
            },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-02-01', y: 20},
                {x: '2018-02-02', y: 100},
                {x: '2018-02-03', y: 140},
                {x: '2018-02-04', y: 550},
                {x: '2018-02-05', y: 40}
              ],
              color: 'rgba(182, 44, 250, 1)'
            }
          ];

        return (


            <View style={styles.container}>
              <Text style={styles.text}>Steps</Text>
              <PureChart style={styles.chart} data={sampleData} type='bar' />
              <Text style={styles.text}>Distance</Text>
              <PureChart style={styles.chart} data={testData} type='bar' />
              <Text style={styles.text}>Speed</Text>
              <PureChart style={styles.chart} data={exampleData} type='bar' />
            </View>




        );
    }
}

export default FitStats;