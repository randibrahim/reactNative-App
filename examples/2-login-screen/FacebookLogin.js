import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable,
  Modal,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FacebookBannerImage from "../../assets/login-page/facebook-banner.jpg";

export default function FacebookLogin({ navigation }) {
  const [modalVisible, setModalVisible ] = useState(false);
  const [showQrCode, setshowQrCode] = useState(false);

  return (
    <>
      <StatusBar id="comp1" style="light" />

      {/* https://reactnative.dev/docs/image */}
      <Image id="comp2" source={FacebookBannerImage} style={styles.banner} />

      <SafeAreaView id="comp3" style={styles.container}>
        <View id="comp4" style={styles.content}>
          <TextInput id="comp5"
            style={[styles.input, styles.inputUsername]}
            placeholder="Insert a valid Email "
            placeholderTextColor="#cdcdcf"
          />

          <TextInput id="comp6"
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#cdcdcf"
          />
          { showQrCode == true?
           <Text id="comQrTest1">Useing Qr Code</Text>
            : 
            <TouchableOpacity id="compQr2" style={styles.link}  onPress={() => setshowQrCode(true)}>
              <Text id="comp10" style={styles.linkText}>Click To use Qr Code </Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity id="comp8_2" style={styles.link}>
            <Text id="comp10_2" style={styles.linkText}>Forget your password Link 2?</Text>
          </TouchableOpacity>

          <TouchableOpacity id="comp8" style={styles.link}>
            <Text id="comp10" title="test login link 2" style={styles.linkText}>Forget your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity id="comp9" style={styles.link}  onPress={() => navigation.navigate('RegisterPage')}>
            <Text id="comp11" style={styles.linkText}>New user</Text>
          </TouchableOpacity>
        </View>

        <View id="comp12" style={styles.centeredView}>
          <Modal id="comp13"
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View id="comp14" style={styles.centeredView}>
              <View id="comp15" style={styles.modalView}>
                <Text  id="comp16" style={styles.modalText}>Hello User!</Text>
                <Pressable id="comp17"
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text id="comp18" style={styles.textStyle}>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable id="comp19"
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text id="comp20" style={styles.textStyle}>Click for more information</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonOpen: {
    backgroundColor: "#1977f3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});