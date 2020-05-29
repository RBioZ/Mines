import React,{Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import {} from './src/functions';


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.basicText}>Tamanho da grade:
        {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field mined  />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged/>
        <Field flagged opened/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f0f5'
  },
  basicText:{
    fontSize:22,
    fontWeight:'bold',
    color:'#666'
  }
})