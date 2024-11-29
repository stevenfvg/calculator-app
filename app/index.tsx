import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '@/components/ThemeText';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.CalculatorContainer}>
            <ThemeText variant="h1">50 + 5000</ThemeText>
            <ThemeText variant="h2">250</ThemeText>
        </View>
    );
};

export default CalculatorApp;
