import { Slot } from 'expo-router';
import { View, Text } from 'react-native';

const RootLayout = () => {
    return (
        <View>
            <Text>Hello World!</Text>
            <Slot />
        </View>
    );
};

export default RootLayout;
