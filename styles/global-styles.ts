import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    CalculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    },
});
