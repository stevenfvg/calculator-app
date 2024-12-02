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
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(
                `${firstFormulaPart} ${lastOperation.current} ${number}`
            );
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    }, [formula]);

    const clean = () => {
        setFormula('0');
        setNumber('0');
        setPrevNumber('0');

        lastOperation.current = undefined;
    };

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    };

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    };

    const setLastNumber = () => {
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    };

    // Mathematical functions
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const x = Number(firstValue);
        const y = Number(secondValue);

        if (isNaN(y)) return x;

        switch (operation) {
            case Operator.add:
                return x + y;

            case Operator.subtract:
                return x - y;

            case Operator.multiply:
                return x * y;

            case Operator.divide:
                return x / y;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    };

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
    };

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
        clean,
        toggleSign,
        deleteLast,

        // Mathematical operations
        addOperation,
        subtractOperation,
        multiplyOperation,
        divideOperation,
        calculateSubResult,
        calculateResult,
    };
};
