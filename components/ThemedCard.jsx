import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ( { style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] || Colors.light
  return (
    <View style={[{
        backgroundColor: theme.uiBackground}, styles.card, style]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = {
  card: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}