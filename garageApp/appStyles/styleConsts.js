import {StyleSheet} from 'react-native';

export const appStylesConst = {
  primary: '#203625',
  secondary: '#718075',
  primaryLight: '#cfd4d1',
  primaryLightLight: '#ebedeb',
};

export const globalStyles = StyleSheet.create({
  startButton: {
    borderWidth: 1,
    borderColor: appStylesConst.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  flexAlignRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputIcons: {
    width: 40,
    height: 40,
    backgroundColor: appStylesConst.primary,
    marginTop: 10,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    padding: 5,
    alignItems: 'center',
  },
});
