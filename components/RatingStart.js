import React from 'react'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { StyleSheet } from 'react-native';

import { 
    MarkerRatingText, 
    MarkerRatingContainer,
    Colors
  } from "../components/style";

const {brand} = Colors

export const RatingStart = ({rating, userRating}) =>{
    return <MarkerRatingContainer>
      <MarkerRatingText>{rating} </MarkerRatingText>
      <StarRatingDisplay rating={rating} starSize={16} color={brand}  style={styles.stars}/>
      <MarkerRatingText>({userRating}) </MarkerRatingText>
    </MarkerRatingContainer>
  }

  const styles = StyleSheet.create({
    stars:{
      paddingTop:'5%',
    },
  })