import { Button } from './Button'
import { StyleProp, Text, TouchableOpacityProps, ViewStyle, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface Props extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

function ContinueButton({ style, ...props }: Props) {
  return (
    <Button {...props} variant="secondary" >
      <Text style={styles.text}>Continue</Text>
      <Ionicons name="caret-forward-outline" size={18} style={styles.icon} />
    </Button>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 16,
  },
  icon: {
    color: '#000000'
  },
});

export default ContinueButton