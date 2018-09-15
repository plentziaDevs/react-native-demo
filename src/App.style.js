import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
    }),
  },
});
