import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Button, CheckBox } from 'react-native-elements'

export default function FormField({
  field,
  label,
  secureTextEntry,
  autoCapitalize,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View id="comp1" style={styles.formGroup}>
      <Text id="comp2" style={styles.label}>{label}</Text>

      <TextInput id="comp3"
        style={styles.input}
        value={values[field]}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || "none"}
      />

      {touched[field] && errors[field] ? (
        <View id="comp4" style={styles.errorContainer}>
          <Text id="comp5" style={styles.errorText}>{errors[field]}</Text>
        </View>
      ) : null}
    </View>
  );
}
