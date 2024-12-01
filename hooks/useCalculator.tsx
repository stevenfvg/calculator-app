import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        // All: calculate subresult.
        setFormula(number);
    }, [number]);

    const buildNumber = (numberString: string) => {
        // Check if the decimal point already exists.
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            // Evaluate if it is another zero and there is no point.
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            // Evaluate if it is different from zero, there is no point and it is the first number.
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }
            // Avoid rendering 0 multiple times, if the initial number is 0.
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString);
    };

    return {
        // Props
        formula,
        number,
        prevNumber,

        // Methods
        buildNumber,
    };
};
