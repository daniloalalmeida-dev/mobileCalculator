import { SetStateAction, useState } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {

	const [onDisplayValue, setOnDisplayValue] = useState('0')
	const [operator, setOperator] = useState('')
	const [storedValue, setStoredValue] = useState('0')
	const [result, setResult] = useState([])

	const addDigit = (num: string) => {
		if (!onDisplayValue.includes(',') || num !== ',') {
			setOnDisplayValue(`${(onDisplayValue + num).replace(/^0+/, '')}`) //A expressão regular substitui o '0' e a ',' por vazio.
		}
	}

	const clearMemory = () => {
		setOnDisplayValue('0');
		setStoredValue('0');
	};

	const setOperationFunction = (operation: string) => {
		
		setOperator(operation)
		setStoredValue(onDisplayValue)
		setOnDisplayValue('0')
		if (operation === '=') {
			try {
				setOnDisplayValue(eval(`${storedValue} ${operator} ${onDisplayValue}`))
		} catch (e) {
			console.warn(e)
		}
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'}/>
			<Display value={onDisplayValue} />
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
				<Button label=',' onClick={addDigit} />
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
