import {
  Appearance,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../appStyles/styleConsts';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export function InputManager({iconName, controlName, onChangeText}) {
  const colorScheme = Appearance.getColorScheme();
  return (
    <View>
      <View style={globalStyles.flexAlignRow}>
        <View style={[globalStyles.inputIcons]}>
          <Icon name={iconName} color={'white'} size={20}></Icon>
        </View>
        <View>
          <TextInput
            style={[
              styles.inputBox,
              colorScheme == 'dark'
                ? {borderColor: 'black', color: 'black'}
                : {borderColor: 'white', color: 'white'},
            ]}
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
    width: 50,
    height: 40,
    marginTop: 10,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
});
