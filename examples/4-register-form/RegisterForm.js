import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Alert,
  CheckBox,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import FormField from "./FormField";
import { RadioButton } from 'react-native-paper';

export default function RegisterForm({navigation}) {
  function onSubmitHandler(values) {
    console.log(values)
    // https://reactnative.dev/docs/alert
    Alert.alert(
      "Register Successfully!",
      "Form data: " + JSON.stringify(values)
    );
  }

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }
  const [value, setValue] = React.useState('male');
  const [isSelected, setSelection] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <SafeAreaView id="comp1" style={styles.topSafeArea} />

      <StatusBar id="comp2" style="light" />

      <SafeAreaView  id="comp3" style={styles.container}>
        <View id="comp4" style={styles.header}>
          <Text id="comp5" style={styles.headerText}>Register</Text>
        </View>

        {/* https://github.com/APSL/react-native-keyboard-aware-scroll-view */}
        <KeyboardAwareScrollView id="comp6"
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={150}
        >
          {/* https://formik.org/docs/overview */}
          <Formik id="comp7"
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <FormField id="comp8"
                  field="firstName"
                  label="First Name"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField id="comp9"
                  field="lastName"
                  label="Last Name"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <Text id="comp10" style={styles.label} >Gender</Text>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                  <RadioButton.Item label="Male" value="male" labelStyle={styles.label} />
                  <RadioButton.Item label="Female" value="female" labelStyle={styles.label} />
                </RadioButton.Group>

                <FormField id="comp11"
                  field="email"
                  label="Email Address"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField id="comp12"
                  field="password"
                  label="Password"
                  secureTextEntry={true}
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField id="comp13"
                  field="confirmPassword"
                  label="Confirm Password"
                  secureTextEntry={true}
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <View id="comp14" style={styles.checkboxContainer}>
                  <CheckBox id="comp15"
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                  <Text id="comp16" style={styles.label}>Agree to terms and conditions?</Text>
                </View>
                <Switch id="comp17"
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                /> <Text id="comp18" style={styles.label}>Access Location?</Text>

                <Button id="comp19"
                  onPress={() => navigation.navigate('BMI')}
                  title="Go to BMI Calculator"
                />
                <TouchableOpacity id="comp20"
                  onPress={handleSubmit}
                >
                  <View id="comp21"
                    style={[
                      styles.button,
                      {
                        opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                      },
                    ]}
                  >
                    <Text id="comp22" style={styles.buttonText}>SUBMIT</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
