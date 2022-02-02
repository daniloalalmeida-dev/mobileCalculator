import React from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	TouchableHighlight,
	Button,
	ButtonProps,
} from 'react-native';

export default (props: any) => {
	const stylesButton = [styles.button];
	if (props.double) stylesButton.push(styles.buttonDouble);
	if (props.triple) stylesButton.push(styles.buttonTriple);
	if (props.operation) stylesButton.push(styles.operationButton);

	return (
		<TouchableHighlight
			underlayColor={'#202020'}
			onPress={() => props.onClick(props.label)}
		>
			<Text style={stylesButton}>{props.label}</Text>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	button: {
		fontSize: 30,
		height: Dimensions.get('screen').width / 4,
		width: Dimensions.get('screen').width / 4,
		padding: 30,
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
		textAlign: 'center',
		alignItems: 'flex-end',
		borderWidth: 4,
		borderColor: '#202020',
		borderRadius: 50,
	},

	operationButton: {
		color: '#fff',
		backgroundColor: '#fa8231',
	},
	buttonDouble: {
		width: (Dimensions.get('window').width / 4) * 2,
	},
	buttonTriple: {
		width: (Dimensions.get('window').width / 4) * 3,
	},
});
