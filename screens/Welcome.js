import React, {useState,useEffect} from "react";
import * as Location from 'expo-location';
import { 
  WelcomeMainContainetr, 
  HeaderBar,
  WelcomeContainetr, 
  MarkerTitle,
  MainTitle,
  MarkerModal,
} from "../components/style";
import MapView, {Marker, Callout} from 'react-native-maps'
import { StyleSheet } from 'react-native';
import { RatingModal } from '../components/RatingModal'
import { RatingStart } from "../components/RatingStart";
import { BluerOverlay } from '../components/BluerOverlay'
import { getMarkersByLocation } from '../services/api'

const INITIAL_REGION = {
  latitude: -38.7651141,
  longitude: -72.7643479,
  latitudeDelta:  0.0222,
  longitudeDelta: 0.0021,
}

const Welcome = ()=> {
    const [initRegion, setInitRegion] = useState(INITIAL_REGION)
    const [markers, setMarkers] = useState(getMarkersByLocation(1,1))
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
                  <RatingStart rating={marker.rating} userRating={marker.user_rating}/>
                </MarkerModal>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </WelcomeContainetr>
      <HeaderBar>
        <MainTitle>Pet Zone</MainTitle>
      </HeaderBar>
      <RatingModal modalVisible={modalVisible} markerSelected={markerSelected} setModalVisible={setModalVisible} />
      {modalVisible && <BluerOverlay/>}
    </WelcomeMainContainetr>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
})

export default Welcome