import { Text, type TextProps } from 'react-native';
import { globalStyles } from '@/styles/global-styles';

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant = 'h1', ...textProperties }: Props) => {
    return (
        <Text
            style={[
                { color: 'white', fontFamily: 'SpaceMono' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...textProperties}
        >
            {children}
        </Text>
    );
};

export default ThemeText;
