import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
	return (
		<WebView
			overScrollMode={'never'}
			source={{ uri: 'http://192.168.0.125:8000/image.jpg' }}
			style={styles.webView}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		height: '100%',
	},
})
