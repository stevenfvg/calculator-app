import { Pressable, Text } from 'react-native';
import { Colors } from '../constants/Colors';
import { globalStyles } from '@/styles/global-styles';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const Button = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    doubleSize = false,
    onPress,
}: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80,
            })}
            onPress={onPress}
        >
            <Text
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white',
                }}
            >
                {label}
            </Text>
        </Pressable>
    );
};

export default Button;
