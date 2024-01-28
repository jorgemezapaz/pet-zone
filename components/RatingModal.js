import React, { useEffect, useState } from 'react'
import { RatingStart } from './RatingStart'
import { Review } from './ReviewCard';
import { StyleSheet, View, Text, Modal, Pressable, Image } from 'react-native';
import { 
    MarkerModal,
    Line,
  } from "./style";
import {getReviewsByLocationId} from '../services/api'
//Icons
import {FontAwesome} from "@expo/vector-icons"
import { Tabs } from 'react-native-collapsible-tab-view';
import {ReviewForm} from './ReviewForm'


export const RatingModal = ({modalVisible, markerSelected, setModalVisible}) => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
      setReviews(getReviewsByLocationId(markerSelected.id))
    }, [markerSelected.id])
    const refreshReviews = () => {
      setReviews(getReviewsByLocationId(markerSelected.id))
    }
    console.log('RatingModal -> marker', markerSelected.imageMarker)
    return <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.reviewHeaderBar}>
          <Pressable
            style={[styles.reviewCloseButtom]}
            onPress={() => setModalVisible(!modalVisible)}>
            <FontAwesome name="close" size={24} color="black" />
          </Pressable>
        </View>
        <MarkerModal>
          <Text style={styles.reviewTitle}>{markerSelected.title}</Text>
          <RatingStart rating={markerSelected.rating} userRating={markerSelected.user_rating}/>
        </MarkerModal>
        <Tabs.Container width={300}>
          <Tabs.Tab name='A' label='Reseñas'>
            <Line/>
            <Tabs.ScrollView>
              {reviews.map((review, index) =>(
                <Review
                key={index}
                name={review.userName}
                rating={review.rating}
                url= {review.avatar}
                review={review.review}
                createdAt={review.createdAt}
                />
              ))}
            </Tabs.ScrollView>
          </Tabs.Tab>
          <Tabs.Tab name='B' label='Escribir Reseñas'>
            <ReviewForm markerId={markerSelected.id} update={refreshReviews}/>
          </Tabs.Tab>
        </Tabs.Container>
      </View>
    </View>
  </Modal>
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxHeight: '80%',
      overflow:'scroll',
    },
    reviewTitle: {
      color: '#1499aa',
      fontWeight: 'bold',
      fontSize: 18,
    },
    reviewCloseButtom:{
      position: 'absolute',
      top: -25,
      left: 150,
    },
    reviewHeaderBar:{
      backgroundColor:'red',
    },

  });