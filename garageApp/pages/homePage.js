import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {appStylesConst, globalStyles} from '../appStyles/styleConsts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LocationManager} from '../components/locationPicker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appState, searchDataTag, updateData} from '../store/counterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {SEARCH_TAG} from '../constants/appConstants';
import {updateAppUserPref} from '../store/action';

export function HomePage({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const [isListPage, setIsListPage] = useState(true);
  const [location, setLocation] = useState({location: 'Thunder Bay, ON'});

  //state
  const appStateInfo = useSelector(appState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('***');
    const abortController = new AbortController();
    const fetchInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/homePage', {
          signal: abortController.signal,
        });
        dispatch(updateData(response.data.data));
        console.log(appStateInfo.data);
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log('Data fetching cancelled');
        } else {
          // Handle error
        }
      }
    };
    fetchInfo();
  }, []);

  const handleInputChange = (fieldName, text) => {
    // Update the formData state with the new value
    setLocation({...location, [fieldName]: text});
  };
  const renderItem = ({item, index}) => (
    <View
      style={[
        styles.item,
        {
          width: windowWidth * 0.44,
          marginLeft: windowWidth * 0.045,
        },
      ]}>
      <View style={styles.imageView}>
        {item.imageUrl ? (
          <Image style={styles.image} source={item.imageUrl} />
        ) : (
          <></>
        )}
      </View>

      <View
        style={[
          globalStyles.flexAlignRow,
          {width: windowWidth * 0.4, padding: 5, marginTop: 3},
        ]}>
        <Icon name={'map-marker'} color={appStylesConst.primary} size={20} />
        <Text style={styles.titleText}>
          {item?.address.city.length < 30
            ? item?.address.city
            : item?.address.city.slice(0, 25) + '...'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} nestedScrollEnabled={true}>
        <View
          style={[
            globalStyles.flexAlignRow,
            {marginLeft: windowWidth * 0.05, marginTop: 40},
          ]}>
          <View>
            <View style={globalStyles.flexAlignRow}>
              <Text style={{marginRight: 5}}>Hello, Welcome</Text>
              <MaterialIcon
                name={'hand-wave'}
                color={appStylesConst.primary}
                size={18}
              />
            </View>
            <Text style={{fontWeight: '600', fontSize: 18}}>Akhil, N</Text>
          </View>
          <View style={{position: 'absolute', right: windowWidth * 0.05}}>
            <View style={styles.userCircle}>
              <Text style={{color: 'white', fontWeight: 700, fontSize: 20}}>
                A
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            {
              marginLeft: windowWidth * 0.05,
              marginTop: 10,
              flex: 1,
              zIndex: 10,
            },
          ]}>
          <LocationManager
            iconName={'location-arrow'}
            controlName={'location'}
            onChangeText={text =>
              handleInputChange('location', text)
            }></LocationManager>
        </View>
        <View
          style={[
            styles.searchOptions,
            globalStyles.flexAlignRow,
            {width: windowWidth * 0.9, marginLeft: windowWidth * 0.05},
          ]}>
          {Object.keys(SEARCH_TAG).map(data => {
            return (
              <TouchableOpacity
                key={data}
                style={[
                  globalStyles.startButton,
                  {marginLeft: 5},
                  appStateInfo.searchDataTag === data
                    ? {backgroundColor: appStylesConst.primary}
                    : null,
                ]}
                onPress={() => {
                  dispatch(searchDataTag(data));
                }}>
                <Text
                  style={[
                    globalStyles.startButtonText,
                    appStateInfo.searchDataTag === data
                      ? {color: 'white'}
                      : {color: appStylesConst.primary},
                  ]}>
                  {SEARCH_TAG[data]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={[{width: windowWidth}]}>
          <FlatList
            data={appStateInfo.data}
            numColumns={2}
            scrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  homePagePills: {
    width: 150,
    height: 40,
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 18,
    position: 'absolute',
    zIndex: 1,
  },
  pillInside: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    overflow: 'hidden',
    marginTop: 12,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 15,
    maxHeight: 190,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
      },
    }),
  },
  image: {
    width: '100%',
    height: 130,
    marginRight: 10,
    borderRadius: 12,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 5,
  },
  userCircle: {
    width: 32,
    height: 32,
    backgroundColor: appStylesConst.primary,
    borderRadius: 999,
    alignItems: 'center',
    textAlign: 'center',
    padding: 2,
  },
  searchOptions: {
    height: 45,
    marginTop: 10,
  },
});
