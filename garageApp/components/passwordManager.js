import {
  Appearance,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React from 'react';

import {globalStyles} from '../appStyles/styleConsts';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export function PasswordManager({controlName, onChangeText}) {
  const colorScheme = Appearance.getColorScheme();
  const [passwordState, setPasswordState] = useState(true);
  const setPasswordVisability = () => {
    setPasswordState(!passwordState);
  };
  const onPressHandler = () => {
    // Handle press event here
    console.log('Button pressed!');
  };

  return (
    <View>
      <View style={globalStyles.flexAlignRow}>
        <View style={[globalStyles.inputIcons]}>
          <Icon name="lock" color={'white'} size={20}></Icon>
        </View>
        <TouchableOpacity
          style={[
            {
              position: 'absolute',
              zIndex: 1,
              top: 0,
              right: 0,
            },
            styles.eyeIcon,
          ]}
          onPress={setPasswordVisability}>
          <Icon name="eye" color={'black'} size={20}></Icon>
        </TouchableOpacity>
        <View>
          <TextInput
            style={[
              styles.inputBox,
              colorScheme == 'dark'
                ? {borderColor: 'black', color: 'black'}
                : {borderColor: 'white', color: 'white'},
            ]}
            secureTextEntry={passwordState}
            onChangeText={onChangeText}
            name={controlName}
            placeholder={controlName}
            autoFocus={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderWidth: 1,
    fontSize: 18,
    padding: 1,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    minWidth: 260,
    padding: 2,
    marginTop: 10,
  },
  eyeIcon: {
    width: 40,
    marginTop: 17,
  },
});
