import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,TextInput } from "react-native";
import MenuItem from "./menuItem";
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];


const Menu = () => {
  return (
    <SafeAreaView id="comp1" style={styles.container}>
      <SectionList id="comp2"
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <MenuItem title={item} />}
        renderSectionHeader={({ section: { title  } }) => (
          <View id="compH1" style={{alignContent:'center', alignItems:'center'}}>
            <Text id="comp3" style={styles.header} >{title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c200",
    padding: 10,
    marginVertical: 8
  },
  header: {
    fontSize: 31,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default Menu;