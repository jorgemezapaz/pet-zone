import React from 'react'
import {RatingStart} from './RatingStart'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from "./style";

const {brand} = Colors

export const Review = ({name, rating, url, review, createdAt}) => {
    return <View style={styles.reviewModal}>
      <View style={styles.headerReview}>
        <Image resizeMode="cover" source={{ uri: url}} style={styles.reviewUserImage}/>
        <Text style={styles.reviewUserName}>{name}</Text>
        <RatingStart rating={rating} userRating={5} starSize={16} color={brand}  style={styles.reviewStar}/>
      </View>
     <View style={styles.reviewComment}>
        <Text style={styles.reviewDate}>{createdAt}</Text>
        <Text>{review}</Text>
     </View>
    </View>
  }


const styles = StyleSheet.create({
    reviewStar:{
      paddingHorizontal:0,
    },
    reviewModal:{
      backgroundColor: '#F5F7F8',
      borderRadius: 10,
      padding: 5,
      marginBottom: 10,
      width: 300,
    },
    reviewUserName:{
      fontWeight: 'bold',
      fontSize: 14,
    },
    reviewUserImage:{
      width: 48,
      height: 48,
      margin: 'auto',
      borderRadius: 50,
    },
    headerReview: {
      alignContent:'center',
      alignItems:'center'
    },
    reviewComment:{
      padding: 10,
    },
    reviewDate:{
      paddingBottom:5,
      color: '#70757a',
    },
  })