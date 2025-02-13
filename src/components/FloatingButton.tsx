import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Text,
} from 'react-native';
import responsive from '../constants/scalling';
import Entypo from '@expo/vector-icons/Entypo';

interface FloatingButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  title?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPress,
  style,
  title = '+',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}>
        <Entypo name="plus" style={styles.buttonIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: responsive.height(50),
    right: responsive.width(30),
    width: responsive.width(50),
    height: responsive.width(50),
    borderRadius: responsive.borderRadius(30),
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: responsive.fontSize(32),
  },
});

export default FloatingButton;