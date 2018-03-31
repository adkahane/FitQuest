import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import EasyCard from '../../components/EasyCard';
import MediumCard from '../../components/MediumCard';
import DifficultCard from '../../components/DifficultCard';
import CreateCard from '../../components/CreateCard';
import styles from './FitNewStyles.js';


class FitNew extends React.Component {


    render() {

        return (


            <View style={styles.container}>
              <EasyCard />
              <MediumCard />
              <DifficultCard />
              <CreateCard />
           </View>




        );
    }
}

export default FitNew;