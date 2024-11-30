import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
import ThemeText from '@/components/ThemeText';
import Button from '@/components/Button';

const CalculatorApp = () => {
    return (
        <View style={globalStyles.CalculatorContainer}>
            {/* Result Screen */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant="h1">25 x 2</ThemeText>
                <ThemeText variant="h2">50</ThemeText>
            </View>
            {/* First row of buttons */}
            <View style={globalStyles.row}>
                <Button
                    label="C"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => null}
                />
                <Button
                    label="+/-"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => null}
                />
                <Button
                    label="del"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => null}
                />
                <Button label="÷" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Second row of buttons */}
            <View style={globalStyles.row}>
                <Button label="7" onPress={() => null} />
                <Button label="8" onPress={() => null} />
                <Button label="9" onPress={() => null} />
                <Button label="x" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Third row of buttons */}
            <View style={globalStyles.row}>
                <Button label="4" onPress={() => null} />
                <Button label="5" onPress={() => null} />
                <Button label="6" onPress={() => null} />
                <Button label="-" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Fourth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="1" onPress={() => null} />
                <Button label="2" onPress={() => null} />
                <Button label="3" onPress={() => null} />
                <Button label="+" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Fifth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="0" doubleSize onPress={() => null} />
                <Button label="." onPress={() => null} />
                <Button label="=" color={Colors.orange} onPress={() => null} />
            </View>
        </View>
    );
};

export default CalculatorApp;
