import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default (props: any) => {
	return (
		<React.Fragment>
			<View style={styles.display}>
				<Text style={styles.displayValue} numberOfLines={1}>
					{props.value}
				</Text>
			</View>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	display: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
		alignItems: 'flex-end',
	},
	displayValue: {
		fontSize: 60,
		color: '#fff',
	},
});
