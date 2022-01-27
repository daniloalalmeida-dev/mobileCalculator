import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';

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
		justifyContent: 'center',
		backgroundColor: '#202020',
		alignItems: 'flex-end',
		margin: 10,
	},
	displayValue: {
		fontSize: 60,
		color: 'white',
	},
});
