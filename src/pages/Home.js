import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native'


export function Home() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}> Metalica, Viva o Rock! </Text>
        
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121015'
    },
    title: {
        color: '#fff'
    }
})