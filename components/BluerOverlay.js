import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native';

export const BluerOverlay = () => {
  return (
    <View style={styles.bluerOverlay} />
  )
}

const styles = StyleSheet.create({
    bluerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 100,
    }
  })
