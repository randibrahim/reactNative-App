import React from "react";
import {
	StyleSheet,
	SafeAreaView,
	Text,
	ImageBackground,
	View,
	Button,
} from "react-native";

import Constants from "expo-constants";
import { Table, Row, Rows } from "react-native-table-component";
import MyFile from "./MyFile";

export default function HelloWorld1({ navigation }) {
	const header = ["ID", "First Name", "Last Name"];
	const data = [
		["1", "Rand", "Ibrahim"],
		["2", "Laith", "Ibrahim"],
		["3", "Eleen", "Ibrahim"],
	];
	const image = {
		uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
	};

	return (
		// https://reactnative.dev/docs/safeareaview
		<SafeAreaView id="comp1" style={styles.container}>
			<ImageBackground
				id="comp2"
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<Text id="comp3" style={styles.text}>
					Outside
				</Text>

				<Text id="comp6" style={styles.heading}>
					Hello{" "}
					<Text id="comp7" style={styles.highlightText2}>
						World
					</Text>
				</Text>

				<Text id="comp8" style={[styles.heading, { color: "#fff" }]}>
					Hello{" "}
					<Text id="comp9" style={styles.highlightText3}>
						World
					</Text>
				</Text>

				<Table
					id="comp10"
					borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}
				>
					<Row id="comp11" data={header} />
					<Rows id="comp12" data={data} />
				</Table>
			</ImageBackground>
			<Button
				id="comp13"
				onPress={() => navigation.navigate("FacebookPage")}
				title="Go to Facebook Page"
			/>
			<View
				style={{
					margin: 10,
				}}
			/>
			<Button
				id="comp20"
				onPress={() => console.log("Hello")}
				title="My new button"
			/>
			<View
				style={{
					margin: 10,
				}}
			/>
			<Button
				onPress={() => console.log("Hello2")}
				title="Not my new button"
			/>
			<MyFile />
		</SafeAreaView>
	);
}

// https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
	container: {
		// SafeAreaView on Android devices
		paddingTop: Constants.statusBarHeight,
	},
	heading: {
		marginTop: 50,
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	highlightText1: {
		color: "#e74c3c",
	},
	highlightText2: {
		fontStyle: "italic",
		textDecorationLine: "underline",
		color: "#2980b9",
	},
	highlightText3: {
		color: "#fff",
		backgroundColor: "#59595d",
	},
});
