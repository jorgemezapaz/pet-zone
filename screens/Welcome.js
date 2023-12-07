import React, {useState,useEffect} from "react";
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import * as Location from 'expo-location';
import { 
  WelcomeMainContainetr, 
  HeaderBar,
  WelcomeContainetr, 
  MarkerRatingText, 
  MarkerTitle,
  MainTitle,
  MarkerModal,
  Colors,
  Line,
  MarkerRatingContainer,
} from "../components/style";
import MapView, {Marker, Callout} from 'react-native-maps'
import { StyleSheet, View, Text, Modal, Pressable, Image, ScrollView } from 'react-native';
//Icons
import {FontAwesome} from "@expo/vector-icons"
//Colors
const {brand, darkLight, primary} = Colors

const INITIAL_REGION = {
  latitude: -38.7651141,
  longitude: -72.7643479,
  latitudeDelta:  0.0222,
  longitudeDelta: 0.0021,
}

const MARKERS = [
  {
    id: 1,
    latlng:{latitude: -38.7651141, longitude: -72.7643479},
    title: "Santa Isabe Labranza",
    rating: 4.5,
    user_rating: 200,
    imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
  },
  {
    id: 2,
    latlng:{latitude: -38.7636417, longitude: -72.7691973},
    title: "Complejo Deportivo Labranza",
    rating: 4.2,
    user_rating: 33,
    imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
  },
  {
    id: 3,
    latlng:{latitude: 38.7627717, longitude: -72.7663649},
    title: "Skatepark Labranza",
    rating: 4.0,
    user_rating: 12,
    imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
  },
  {
    id: 4,
    latlng:{latitude: -38.7638425, longitude: -72.7706564},
    title: "Berlin Bears Recreation Center",
    rating: 3.7,
    user_rating: 45,
    imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
  }
]

const REVIEWS = [
  {
    id: 1,
    userName: 'Jorge',
    avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=robohash&r=x',
    rating: 3.7,
    createdAt: '11-10-2023',
    review: 'Está mal diseñado lo único destacable es su manualera y el piso en la parte de arriba del pasto cintetico lo demás todo mal diseñado.',
    markerId: 1
  },
  {
    id: 1,
    userName: 'Andres',
    avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
    rating: 4.0,
    createdAt: '07-09-2023',
    review: 'No entre al lugar ,pero en otro momento iré',
    markerId: 1
  },
  {
    id: 1,
    userName: 'Maria',
    avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
    rating: 3,
    createdAt: '16-08-2023',
    review: 'Excelente lugar para hacer deportes y disfrutar con la familia',
    markerId: 1
  }
]

const Welcome = ()=> {
    const [initRegion, setInitRegion] = useState(INITIAL_REGION)
    const [markers, setMarkers] = useState(MARKERS)
    const [modalVisible, setModalVisible] = useState(false);
    const [markerSelected, setMarkerSelected] = useState({})
    
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

      })();
    }, []);



  return (
    <WelcomeMainContainetr>
      <WelcomeContainetr>
    
        <MapView 
        style={styles.map} 
        initialRegion={initRegion}
        showsMyLocationButton={true}
        showsUserLocation={true}
        
        showsCompass={true}
        toolbarEnabled={true}
        zoomEnabled={true}
        >
        {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
            >
              <Callout onPress={() => { 
                setMarkerSelected(marker)
                setModalVisible(true)
                }}>
                <MarkerModal>
                  <MarkerTitle>{marker.title}</MarkerTitle>
                  <RatingComponent rating={marker.rating} userRating={marker.user_rating}/>
                </MarkerModal>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </WelcomeContainetr>
      <HeaderBar>
        <MainTitle>Pet Zone</MainTitle>
      </HeaderBar>
      <ModalComponent modalVisible={modalVisible} markerSelected={markerSelected} setModalVisible={setModalVisible} />
    </WelcomeMainContainetr>
  )
}

const RatingComponent = ({rating, userRating}) =>{
  return <MarkerRatingContainer>
    <MarkerRatingText>{rating} </MarkerRatingText>
    <StarRatingDisplay rating={rating} starSize={16} color={brand}  style={styles.stars}/>
    <MarkerRatingText>({userRating}) </MarkerRatingText>
  </MarkerRatingContainer>
}

const ModalComponent = ({modalVisible, markerSelected, setModalVisible}) => {
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
        <RatingComponent rating={markerSelected.rating} userRating={markerSelected.user_rating}/>
      </MarkerModal>
      
      <Text>Reseñas</Text>
      <Line/>
      <ScrollView>
        {REVIEWS.map((review, index) =>(
          <ReviewComponent
          key={index}
          name={review.userName}
          rating={review.rating}
          url= {review.avatar}
          review={review.review}
          createdAt={review.createdAt}
          />
        ))}
      </ScrollView>
    </View>
  </View>
</Modal>
}

const ReviewComponent = ({name, rating, url, review, createdAt}) => {
  return <View style={styles.reviewModal}>
    <View style={styles.headerReview}>
      <Image resizeMode="cover" source={{ uri: url}} style={styles.reviewUserImage}/>
      <Text style={styles.reviewUserName}>{name}</Text>
      <StarRatingDisplay rating={rating} starSize={16} color={brand}  style={styles.reviewStar}/>
    </View>
   <View style={styles.reviewComment}>
      <Text style={styles.reviewDate}>{createdAt}</Text>
      <Text>{review}</Text>
   </View>
  </View>
}


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  stars:{
    paddingTop:'5%',
  },
  reviewStar:{
    paddingHorizontal:0,
  },
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
  }
});

export default Welcome