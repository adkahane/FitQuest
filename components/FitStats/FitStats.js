import React from 'react';
import { StyleSheet, View, Component } from 'react-native';
import Chart from 'react-native-chart';
import styles from './FitStatsStyles.js';


class FitStats extends React.Component {


    render() {
        const data = [
            [0, 1],
            [1, 3],
            [3, 7],
            [4, 9],
        ];

        return (


            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="line"
                />
            </View>




        );
    }
}

export default FitStats;