import React from "react";
import HelloWorld2 from "./examples/1-hello-world/HelloWorld2";
import FacebookLogin from "./examples/2-login-screen/FacebookLogin";
import RegisterFormTabs from "./examples/4-register-form/RegisterFormTabs";
import StopWatch from "./examples/8-stopwatch/StopWatch";
import BMICalculator from "./examples/9-bmi-calculator/BMICalculator";
import WorldwideNews from "./examples/11-news/WorldwideNews";
import Menu from "./examples/resturant-menu/menu";

export const EXAMPLE_LIST = [
  {
    name: "Hello World",
    level: 1,
    component: <HelloWorld2 />,
  },
  {
    name: "Facebook Login Screen",
    level: 2,
    component: <FacebookLogin />,
  },
  {
    name: "Resturant Menu",
    level: 3,
    component: <Menu />,
  },
  {
    name: "Register Form",
    level: 4,
    component: <RegisterFormTabs />,
  },
  {
    name: "Stop Watch",
    level: 8,
    component: <StopWatch />,
  },
  {
    name: "BMI Calculator",
    level: 9,
    component: <BMICalculator />,
  },
  {
    name: "Worldwide News",
    level: 11,
    component: <WorldwideNews />,
  },
];
