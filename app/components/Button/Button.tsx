import * as React from 'react';
import {Pressable, Text, StyleSheet, ViewStyle} from 'react-native';

import {useTheme} from '../../theme/useTheme';

export type ButtonProps = {
  onPress: () => void;
  text?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
};

export const Button = ({
  onPress,
  text,
  children,
  style,
  backgroundColor,
}: ButtonProps) => {
  const {theme} = useTheme();
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        {
          backgroundColor: pressed
            ? `${theme.primary}ee`
            : backgroundColor
            ? backgroundColor
            : theme.primary,
        },
        style,
      ]}
      onPress={onPress}>
      {children ? children : <></>}
      {text ? <Text style={styles.text}>{text}</Text> : <></>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: {color: 'white'},
});
