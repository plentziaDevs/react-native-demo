import { Platform, StyleSheet } from 'react-native';

import { STYLE } from 'common';

const { COLOR } = STYLE;

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
        color: COLOR.PRIMARY,
      },
    }),
  },
});
