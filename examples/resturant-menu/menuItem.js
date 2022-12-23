import React from "react";

import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,TextInput } from "react-native";

const MenuItem = ({ title }) => (
  <View style={[styles.item,{width:400}]}>
    <Text style={styles.title}>{title} ,Price: 12</Text>
  </View>
);

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c200",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});