import { SetStateAction, useState } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
	const [initialState, setInitialState] = useState({
		displayValue: '0',
		clearDisplay: false,
		operation: null,
		values: [0, 0],
		current: 0,
	});

	const [state, setState] = useState({ ...initialState });

	const addDigit = (num: string) => {
		const clearDisplay = state.displayValue === '0' || state.clearDisplay;

		if (num === '.' && !clearDisplay && state.displayValue.includes('.')) {
			return;
		}

		const currentValue = clearDisplay ? '' : state.displayValue;
		const displayValue = currentValue + num;
		setState({ ...state, displayValue, clearDisplay: false });

		if (num !== '.') {
			const newValue = parseFloat(displayValue);
			const values = [...state.values];
			values[state.current] = newValue;
			setState({ ...state, values, displayValue });
		}
	};

	const clearMemory = () => {
		setState({ ...initialState });
	};

	const setOperationFunction = (operation: null) => {
		if (state.current === 0) {
			setState({
				...state,
				operation,
				current: 1,
				displayValue: '0',
				//clearDisplay: true
			});
		} else {
			const equals = operation === '=';
			const values = [...state.values];
			try {
				values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`);
			} catch (e) {
				values[0] = state.values[0];
			}

			values[1] = 0;
			setState({
				displayValue: `${values[0]}`,
				operation: equals ? null : operation,
				current: equals ? 0 : 1,
				clearDisplay: !equals,
				values,
			});
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<Display value={state.displayValue} />
			<SafeAreaView style={styles.buttons}>
				<Button label='AC' triple onClick={clearMemory} />
				<Button label='/' operation onClick={setOperationFunction} />
				<Button label='7' onClick={addDigit} />
				<Button label='8' onClick={addDigit} />
				<Button label='9' onClick={addDigit} />
				<Button label='*' operation onClick={setOperationFunction} />
				<Button label='4' onClick={addDigit} />
				<Button label='5' onClick={addDigit} />
				<Button label='6' onClick={addDigit} />
				<Button label='-' operation onClick={setOperationFunction} />
				<Button label='1' onClick={addDigit} />
				<Button label='2' onClick={addDigit} />
				<Button label='3' onClick={addDigit} />
				<Button label='+' operation onClick={setOperationFunction} />
				<Button label='0' double onClick={addDigit} />
				<Button label='.' onClick={addDigit} />
				<Button label='=' operation onClick={setOperationFunction} />
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202020',
		justifyContent: 'flex-end',
	},
	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});
