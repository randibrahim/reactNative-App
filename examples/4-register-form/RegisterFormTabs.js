import * as React from 'react';
import {Dimensions} from "react-native";
import { styles } from "./styles";
import { TabView, SceneMap } from 'react-native-tab-view';
import FacebookLogin from '../2-login-screen/FacebookLogin';
import RegisterForm from '../4-register-form/RegisterForm';

const FacebookRoute = () => (
  <FacebookLogin />
);
const RegisterRoute = () => (
  <RegisterForm/>
);

export default class RegisterFormTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Facebook Page' },
      { key: 'second', title: 'Register Page' },
    ],
  };

  render() {
    return (
      <TabView id="comp1"
        navigationState={this.state}
        renderScene={SceneMap({
          first: FacebookRoute,
          second: RegisterRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
      />
    );
  }
}