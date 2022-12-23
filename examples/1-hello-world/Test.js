import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	SectionList,
	StatusBar,
	TextInput,
} from "react-native";
import MenuItem from "./menuItem";
const DATA = [
	{
		title: "Main dishes",
		data: ["Pizza", "Burger", "Risotto"],
	},
	{
		title: "Sides",
		data: ["French Fries", "Onion Rings", "Fried Shrimps"],
	},
	{
		title: "Drinks",
		data: ["Water", "Coke", "Beer"],
	},
	{
		title: "Desserts",
		data: ["Cheese Cake", "Ice Cream"],
	},
];

const Menu = () => {
	return (
		<SafeAreaView id="comp1" style={styles.container}>
			<Text>Hello</Text>
		</SafeAreaView>
	);
};

export default Menu;
