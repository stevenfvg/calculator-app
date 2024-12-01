import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
import ThemeText from '@/components/ThemeText';
import Button from '@/components/Button';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
    const { formula, buildNumber } = useCalculator();

    return (
        <View style={globalStyles.CalculatorContainer}>
            {/* Result Screen */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant="h1">{formula}</ThemeText>
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
                <Button label="7" onPress={() => buildNumber('7')} />
                <Button label="8" onPress={() => buildNumber('8')} />
                <Button label="9" onPress={() => buildNumber('9')} />
                <Button label="x" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Third row of buttons */}
            <View style={globalStyles.row}>
                <Button label="4" onPress={() => buildNumber('4')} />
                <Button label="5" onPress={() => buildNumber('5')} />
                <Button label="6" onPress={() => buildNumber('6')} />
                <Button label="-" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Fourth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="1" onPress={() => buildNumber('1')} />
                <Button label="2" onPress={() => buildNumber('2')} />
                <Button label="3" onPress={() => buildNumber('3')} />
                <Button label="+" color={Colors.orange} onPress={() => null} />
            </View>
            {/* Fifth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="0" doubleSize onPress={() => buildNumber('0')} />
                <Button label="." onPress={() => buildNumber('.')} />
                <Button label="=" color={Colors.orange} onPress={() => null} />
            </View>
        </View>
    );
};

export default CalculatorApp;
