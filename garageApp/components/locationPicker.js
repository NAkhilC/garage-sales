import {
  Appearance,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {appStylesConst, globalStyles} from '../appStyles/styleConsts';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {updateAppUserPref} from '../store/counterSlice';

export function LocationManager({iconName, controlName, onChangeText}) {
  const colorScheme = Appearance.getColorScheme();
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const placeRef = useRef(null);
  return (
    <View style={styles.container}>
      <View style={globalStyles.flexAlignRow}>
        <View
          style={[
            globalStyles.inputIcons,
            {
              height: 45,
              backgroundColor: null,
              borderWidth: 1,
              borderRightWidth: 0,
            },
          ]}>
          <View style={{padding: 4}}>
            <Icon
              name={'search'}
              color={appStylesConst.primary}
              size={20}></Icon>
          </View>
        </View>
        {/* <View
          style={[
            styles.inputBox,
            {
              width: '80%',
              padding: 0,
              borderLeftWidth: 0,
              overflow: 'scroll',
            },
          ]}> */}
        <GooglePlacesAutocomplete
          placeholder="Search"
          ref={placeRef}
          disableScroll={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          fetchDetails={true} // you need this to fetch the details object onPress
          onPress={(data, details = null) => {
            dispatch(
              updateAppUserPref({
                placeId: data.place_id,
                addressText: data.description,
                lat: details?.geometry?.location?.lat,
                lng: details?.geometry?.location?.lng,
              }),
            );
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          textInputProps={{
            clearButtonMode: 'never',
            ref: input => {
              this.textInput = input;
            },
          }}
          renderRightButton={() => (
            <TouchableOpacity
              style={{position: 'absolute', right: 8, marginTop: 15}}
              onPress={() => {
                console.log(placeRef.current);
                placeRef.current?.setAddressText('');
              }}>
              <Icon name="remove" color={'black'} size={15}></Icon>
            </TouchableOpacity>
          )}
          styles={{
            textInputContainer: {
              width: windowWidth * 0.8,
              height: 45,
              marginTop: 5,
            },
            containerResultRow: {
              flex: 1,
              height: 55,
              justifyContent: 'center',
              paddingHorizontal: 15,
              backgroundColor: 'gray',
            },
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: 'red',
            },
            textInput: {
              height: '100%',
              marginVertical: 5,
              borderWidth: 1,
              borderColor: appStylesConst.primary,
              backgroundColor: appStylesConst.primaryLightLight,
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            listView: {
              position: 'absolute',
              zIndex: 2, //Forcing it to front
              marginTop: 45,
              width: windowWidth * 0.8,
              backgroundColor: appStylesConst.primary,
            },
          }}
          query={{
            key: 'replacekey',
            language: 'en',
            components: 'country:ca',
            types: '(regions)',
          }}
        />
        {/* <GooglePlacesAutocomplete
        styles={{
          container: {
            marginTop: 10,
            width: windowWidth * 0.8,
            flex: 1,
          },

          listView: {
            position: 'absolute',
            backgroundColor: 'red',
            zIndex: 9999, //To popover the component outwards
            position: 'absolute',
            elevation: 1,
            flex: 1,
            marginTop: 45,
          },
          textInput: {
            backgroundColor: appStylesConst.primaryLightLight,
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            height: 45,
          },
        }}
        enablePoweredByContainer={false}
        minLength={2}
        onChangeText={onChangeText}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]}
        listViewDisplayed={true}
        name={controlName}
        placeholder="Search"
        autoFocus={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'replacekey',
          language: 'en',
          components: 'country:ca',
        }}
      /> */}
        {/* <TextInput
            style={[
              styles.inputBox,
              {width: windowWidth * 0.8, borderLeftWidth: 0},
              colorScheme == 'dark'
                ? {borderColor: 'black', color: 'black'}
                : {borderColor: 'white', color: 'white'},
            ]}
            onChangeText={onChangeText}
            name={controlName}
            placeholder={'Enter location'}
            autoFocus={true}
          /> */}
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 10,
  },
  inputBox: {
    borderWidth: 1,
    height: 45,
    fontSize: 18,
    padding: 1,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    padding: 2,
    marginTop: 10,
  },
  eyeIcon: {
    width: 50,
    height: 35,
    marginTop: 10,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
});
