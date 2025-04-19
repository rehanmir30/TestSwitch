import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './views/splash';
import LoginScreen from './views/login';
import OnboardingScreen from './views/onBoarding';
import BookNowScreen from './views/bookNow';
import VerifyingScreen from './views/scanning';
import DashboardScreen from './views/dashboard';
import HomeView from './views/homeView';
import NotificationsScreen from './views/notification';
import TestCenters from './views/subSettings/testCenters';
import Availability from './views/subSettings/availability';
import Alerts from './views/subSettings/alerts';
import AutoSwitch from './views/subSettings/autoSwitch';

import AvailabilitySub from './views/subSettings/availabilitySub';
import SpecificUnAvailability from './views/subSettings/specificUnAvailability';
import AddSpecificUnAvailability from './views/subSettings/addSpecificUnAvailability';


import Tips from './views/subHelp/tips';
import FAQs from './views/subHelp/faqs';
import FeedBack from './views/subHelp/feedback';
import Privacy from './views/subHelp/privacy';
import Support from './views/subHelp/support';
import Terms from './views/subHelp/terms';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BookNow" component={BookNowScreen} />
        <Stack.Screen name="Scanning" component={VerifyingScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
  <Stack.Screen name="TestCenters" component={TestCenters} />
  <Stack.Screen name="Availability" component={Availability} />
  <Stack.Screen name="AvailabilitySub" component={AvailabilitySub} />
  <Stack.Screen name="SpecificUnAvailability" component={SpecificUnAvailability} />
  <Stack.Screen name="AddSpecificUnAvailability" component={AddSpecificUnAvailability} />
  <Stack.Screen name="Alerts" component={Alerts} />
  <Stack.Screen name="AutoSwitch" component={AutoSwitch} />

  <Stack.Screen name="FAQs" component={FAQs} />
  <Stack.Screen name="Tips" component={Tips} />
  <Stack.Screen name="Feedback" component={FeedBack} />
  <Stack.Screen name="Privacy" component={Privacy} />
  <Stack.Screen name="Support" component={Support} />
  <Stack.Screen name="Terms" component={Terms} />
  {/* <Stack.Screen name="AvailabilitySub" component={AvailabilitySub} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
