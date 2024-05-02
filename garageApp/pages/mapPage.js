import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {appStylesConst, globalStyles} from '../appStyles/styleConsts';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {appState} from '../store/counterSlice';

export function MapPage({navigation}) {
  const appStateInfo = useSelector(appState);
  const mapRef = useRef(null);
  const locationState = {
    placeId: '',
    addressText: '',
    lat: appStateInfo.appUser.userPreference.lat,
    lng: appStateInfo.appUser.userPreference.lng,
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerMap}>
        <View style={{flex: 1}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            ref={mapRef}
            region={{
              longitude: locationState.lng, // initial latitude for the map
              latitude: locationState.lat, // initial longitude for the map
              latitudeDelta: 0.0922, // latitude span for the map
              longitudeDelta: 0.0421, // longitude span for the map
            }}
            initialRegion={{
              longitude: locationState.lng, // initial latitude for the map
              latitude: locationState.lat, // initial longitude for the map
              latitudeDelta: 0.0922, // latitude span for the map
              longitudeDelta: 0.0421, // longitude span for the map
            }}>
            {/* <Marker
              coordinate={{
                latitude: locationState.lat,
                longitude: locationState.lng,
              }}
              title="Content for item 2"
              description="Marker description"
            /> */}
            {/* <Marker
              coordinate={{latitude: 48.374, longitude: -89.279799}}
              title="Marker title"
              description="Marker description"
            />
            <Marker
              coordinate={{latitude: 48.379, longitude: -89.249799}}
              title="Marker title"
              description="Marker description"
            />
            <Marker
              coordinate={{latitude: 48.389, longitude: -89.288799}}
              title="Marker title"
              description="Marker description"
            /> */}
          </MapView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appStylesConst.primaryLightLight,
  },

  containerMap: {
    flex: 1,
    width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mainPgaeLocationInput: {
    marginTop: 100,
  },
  imageView: {
    borderRadius: 5,
  },
});
