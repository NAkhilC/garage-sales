import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
  Appearance,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {appStylesConst, globalStyles} from '../appStyles/styleConsts';
import {PasswordManager} from '../components/passwordManager';
import {InputManager} from '../components/inputManager';

export function LoginManager({navigation}) {
  const scaleAnimate = useRef(new Animated.Value(150)).current;
  const scaleAnimateInput = useRef(new Animated.Value(340)).current;
  const windowHeight = Dimensions.get('window').height;
  const colorScheme = Appearance.getColorScheme();
  const [isLogin, setIsLogin] = useState(true);
  const loginForm = {
    email: null,
    password: null,
  };
  const [formData, setFormData] = useState(loginForm);
  const [formDataSignUp, setFormDataSignUp] = useState({
    email: null,
    lastName: null,
    password: null,
    firstName: null,
    confirmPassword: null,
  });

  const handleInputChange = (fieldName, text) => {
    // Update the formData state with the new value
    setFormData({...formData, [fieldName]: text});
  };

  const handleInputChangeSignUp = (fieldName, text) => {
    // Update the formData state with the new value
    setFormDataSignUp({...formDataSignUp, [fieldName]: text});
  };

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnimate, {
        toValue: windowHeight * 0.28,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnimateInput, {
        toValue: windowHeight * 0.8,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  const animationStyle = {
    height: scaleAnimate,
  };
  const animationStyleInputs = {
    height: scaleAnimateInput,
  };
  return (
    <View
      style={[
        styles.container,
        colorScheme !== 'dark'
          ? {backgroundColor: 'black'}
          : {backgroundColor: 'white'},
      ]}>
      <Animated.View
        style={[
          styles.parent,
          animationStyle,
          {backgroundColor: appStylesConst.primary},
        ]}>
        <View style={styles.child}>
          <Text
            style={[
              styles.title,
              colorScheme !== 'dark' ? {color: 'black'} : {color: 'white'},
            ]}>
            Welcome again!
          </Text>
          <Text
            style={[
              styles.titleCaption,
              colorScheme !== 'dark' ? {color: 'black'} : {color: 'white'},
            ]}>
            Start Your Journey Here
          </Text>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.loginComponent,
          animationStyleInputs,
          colorScheme !== 'dark'
            ? {backgroundColor: 'black'}
            : {backgroundColor: 'white'},
          {alignContent: 'center'},
        ]}>
        <View style={[styles.loginComponentView]}>
          {isLogin ? (
            <>
              <Text
                style={[
                  styles.pageTitle,
                  colorScheme == 'dark' ? {color: 'black'} : {color: 'white'},
                ]}>
                Login
              </Text>
              <InputManager
                iconName={'envelope'}
                controlName={'email'}
                onChangeText={text =>
                  handleInputChange('email', text)
                }></InputManager>
              <PasswordManager
                controlName={'email'}
                onChangeText={text =>
                  handleInputChange('password', text)
                }></PasswordManager>
              <TouchableOpacity
                style={[
                  globalStyles.startButton,
                  {minWidth: 300, marginTop: 20},
                ]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={globalStyles.startButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signUpLink}
                onPress={() => {
                  setIsLogin(!isLogin);
                }}>
                <Text
                  style={
                    colorScheme == 'dark' ? {color: 'black'} : {color: 'white'}
                  }>
                  Don't have an account ?
                </Text>
                <Text
                  style={[
                    styles.signUpLinkText,
                    colorScheme == 'dark' ? {color: 'black'} : {color: 'white'},
                  ]}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text
                style={[
                  styles.pageTitle,
                  colorScheme == 'dark' ? {color: 'black'} : {color: 'white'},
                ]}>
                Sign Up
              </Text>
              <InputManager
                iconName={'envelope'}
                controlName={'email'}
                onChangeText={text =>
                  handleInputChangeSignUp('email', text)
                }></InputManager>
              <InputManager
                iconName={'user'}
                controlName={'firstName'}
                onChangeText={text =>
                  handleInputChangeSignUp('firstName', text)
                }></InputManager>
              <InputManager
                iconName={'user'}
                controlName={'lastName'}
                onChangeText={text =>
                  handleInputChangeSignUp('lastName', text)
                }></InputManager>
              <PasswordManager
                controlName={'password'}
                onChangeText={text =>
                  handleInputChangeSignUp('password', text)
                }></PasswordManager>
              <PasswordManager
                controlName={'confirmPassword'}
                onChangeText={text =>
                  handleInputChangeSignUp('confirmPassword', text)
                }></PasswordManager>
              <TouchableOpacity
                style={[
                  globalStyles.startButton,
                  {minWidth: 300, marginTop: 20},
                ]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={globalStyles.startButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signUpLink}
                onPress={() => {
                  setFormData(loginForm);
                  setIsLogin(!isLogin);
                }}>
                <Text
                  style={
                    colorScheme == 'dark' ? {color: 'black'} : {color: 'white'}
                  }>
                  Don't have an account ?
                </Text>
                <Text
                  style={[
                    styles.signUpLinkText,
                    colorScheme == 'dark' ? {color: 'black'} : {color: 'white'},
                  ]}>
                  Login up
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pageTitle: {
    fontSize: 24,
    marginBottom: 5,
  },
  titleCaption: {
    fontSize: 14,
    marginBottom: 30,
    marginTop: 5,
    marginLeft: 10,
  },
  parent: {
    height: '35%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  loginComponent: {
    marginTop: 0,
    transform: [{scaleX: 2}],
    overflow: 'hidden',
    alignItems: 'center',
  },
  loginComponentView: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    alignItems: 'flex-start',
    minWidth: 300,
    marginTop: 20,
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    fontSize: 16,
    padding: 1,
    borderRadius: 4,
    minWidth: 300,
    padding: 2,
    marginTop: 10,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  signUpLink: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
  },
  signUpLinkText: {fontSize: 15, fontWeight: 'bold', marginLeft: 2},
});
