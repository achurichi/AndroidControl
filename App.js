import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
	return (
		<WebView
			source={{ uri: 'http://192.168.0.125:8000/index.html' }}
			style={styles.container}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
	},
})
