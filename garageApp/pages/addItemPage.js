import React, {useState, useRef, useEffect} from 'react';
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
  TextInput,
} from 'react-native';
import axios from 'axios';
import {appStylesConst, globalStyles} from '../appStyles/styleConsts';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {appState} from '../store/counterSlice';
import {launchImageLibrary} from 'react-native-image-picker';

export function AddItem({navigation}) {
  const appStateInfo = useSelector(appState);
  const windowWidth = Dimensions.get('window').width;
  const mapRef = useRef(null);
  const [addItem, setAddItem] = useState({
    title: '',
    location: '',
    description: '',
  });
  const [selectedImages, setSelectedImages] = useState(null);
  const handleInputChange = (fieldName, text) => {
    // Update the formData state with the new value
    setAddItem({...addItem, [fieldName]: text});
  };
  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3000/api/homePage', {
      addItem,
    });
    console.log(response.data);
  };
  // Function to handle image selection
  const selectImages = async () => {
    const options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
      selectionLimit: 6,
    };
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // useEffect(() => {
        setSelectedImages(response.assets);
        //});
        // Process selected images

        // You can do whatever you want with the selected images here
      }
    });
  };

  useEffect(() => {
    console.log(selectedImages?.length);
  }, [selectedImages]);

  const ShowImages = () => {
    return (
      <View
        style={[
          {
            width: windowWidth * 0.9,
          },
          globalStyles.flexAlignRow,
          styles.showImagesView,
        ]}>
        {selectedImages?.map((image, index) => {
          return (
            <View style={styles.imageView} key={index}>
              <Image
                source={image}
                style={{width: '100%', height: 100}}></Image>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: -5,
                  backgroundColor: appStylesConst.primary,
                  padding: 2,
                  paddingLeft: 3,
                  width: 20,
                  borderRadius: 80,
                  marginTop: -10,
                }}
                onPress={() => {
                  let images = JSON.parse(JSON.stringify(selectedImages));
                  images.splice(index, 1);
                  setSelectedImages(images);
                }}>
                <Icon
                  name={'remove'}
                  color={appStylesConst.primaryLightLight}
                  size={16}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={[styles.pageTitle]}>Post sale</Text>
        <View>
          <Text style={[{color: 'black'}]}>Title</Text>
          <TextInput
            style={[
              styles.inputBox,

              {borderColor: 'black', color: 'black', width: windowWidth * 0.9},
            ]}
            onChangeText={text => handleInputChange('title', text)}
            name={'title'}
            placeholder={'title'}
            autoFocus={true}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={[{color: 'black'}]}>Pick location</Text>
          <TextInput
            style={[
              styles.inputBox,

              {borderColor: 'black', color: 'black', width: windowWidth * 0.9},
            ]}
            onChangeText={text => handleInputChange('location', text)}
            name={'location'}
            placeholder={'location'}
            autoFocus={true}
          />
        </View>
        <View>
          {selectedImages?.length > 0 ? <ShowImages /> : <></>}
          <View style={{marginTop: 20}}>
            <Text>Select Image</Text>
            <TouchableOpacity
              onPress={selectImages}
              style={[
                styles.inputBox,
                {
                  borderColor: 'black',
                  color: 'black',
                  width: windowWidth * 0.9,
                  alignItems: 'center',
                  padding: 10,
                },
              ]}>
              <Icon name={'camera'} color={appStylesConst.primary} size={16} />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={[{color: 'black'}]}>Description</Text>
            <TextInput
              style={[
                styles.inputBox,

                {
                  borderColor: 'black',
                  color: 'black',
                  width: windowWidth * 0.9,
                  height: 100,
                },
              ]}
              onChangeText={text => handleInputChange('description', text)}
              name={'description'}
              editable
              multiline
              numberOfLines={4}
              placeholder={'description'}
              autoFocus={true}
            />
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={[
                globalStyles.startButton,
                {marginLeft: 5, backgroundColor: appStylesConst.primary},
              ]}
              onPress={() => {
                handleSubmit();
              }}>
              <Text style={{color: appStylesConst.primaryLightLight}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appStylesConst.primaryLightLight,
    marginBottom: 20,
    overflow: 'visible',
  },
  pageTitle: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    fontSize: 18,
    padding: 1,
    borderRadius: 4,
    minWidth: 260,
    padding: 2,
  },
  imageView: {
    minWidth: 110,
    maxWidth: 110,
    backgroundColor: 'green',
    marginLeft: '2%',
    marginTop: 20,
  },
  showImagesView: {
    minHeight: 100,
    flexWrap: 'wrap',
  },
});
