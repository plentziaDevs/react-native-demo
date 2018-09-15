import { string } from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

import styles from './Button.style';

class Button extends PureComponent {
  static defaultProps = {
    title: string.isRequired,
  };

  render() {
    const { props: { title, ...inherit } } = this;

    return (
      <TouchableWithoutFeedback {...inherit}>
        <View style={[styles.container, inherit.style]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;
