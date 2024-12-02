import ThemeText from '@/components/ThemeText';
import Button from '@/components/Button';
import { View } from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
    const {
        formula,
        prevNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        addOperation,
        subtractOperation,
        multiplyOperation,
        divideOperation,
        calculateResult,
    } = useCalculator();

    return (
        <View style={globalStyles.CalculatorContainer}>
            {/* Result Screen */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant="h1">{formula}</ThemeText>

                {formula === prevNumber ? (
                    <ThemeText variant="h2"> </ThemeText>
                ) : (
                    <ThemeText variant="h2">{prevNumber}</ThemeText>
                )}
            </View>
            {/* First row of buttons */}
            <View style={globalStyles.row}>
                <Button
                    label="C"
                    blackText
                    color={Colors.lightGray}
                    onPress={clean}
                />
                <Button
                    label="+/-"
                    blackText
                    color={Colors.lightGray}
                    onPress={toggleSign}
                />
                <Button
                    label="del"
                    blackText
                    color={Colors.lightGray}
                    onPress={deleteLast}
                />
                <Button
                    label="÷"
                    color={Colors.orange}
                    onPress={divideOperation}
                />
            </View>
            {/* Second row of buttons */}
            <View style={globalStyles.row}>
                <Button label="7" onPress={() => buildNumber('7')} />
                <Button label="8" onPress={() => buildNumber('8')} />
                <Button label="9" onPress={() => buildNumber('9')} />
                <Button
                    label="x"
                    color={Colors.orange}
                    onPress={multiplyOperation}
                />
            </View>
            {/* Third row of buttons */}
            <View style={globalStyles.row}>
                <Button label="4" onPress={() => buildNumber('4')} />
                <Button label="5" onPress={() => buildNumber('5')} />
                <Button label="6" onPress={() => buildNumber('6')} />
                <Button
                    label="-"
                    color={Colors.orange}
                    onPress={subtractOperation}
                />
            </View>
            {/* Fourth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="1" onPress={() => buildNumber('1')} />
                <Button label="2" onPress={() => buildNumber('2')} />
                <Button label="3" onPress={() => buildNumber('3')} />
                <Button
                    label="+"
                    color={Colors.orange}
                    onPress={addOperation}
                />
            </View>
            {/* Fifth row of buttons */}
            <View style={globalStyles.row}>
                <Button label="0" doubleSize onPress={() => buildNumber('0')} />
                <Button label="." onPress={() => buildNumber('.')} />
                <Button
                    label="="
                    color={Colors.orange}
                    onPress={calculateResult}
                />
            </View>
        </View>
    );
};

export default CalculatorApp;
