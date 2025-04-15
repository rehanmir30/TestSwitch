import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HomeView from './homeView';
import SettingsView from './settingView';
import ProfileView from './profileView';
import HelpView from './helpView';

export default function DashboardScreen({ navigation, activeScreen = 'Home' }) {
  const [active, setActive] = useState(activeScreen);

  const navigateTo = (screenName) => {
    setActive(screenName);
  };

  const renderActiveScreen = () => {
    switch (active) {
      case 'Home':
        return <HomeView navigation={navigation} />;
      case 'Settings':
        return <SettingsView navigation={navigation} />;
      case 'Profile':
        return <ProfileView navigation={navigation} />;
      case 'Help':
        return <HelpView navigation={navigation} />;
      default:
        return <HomeView navigation={navigation} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Render the active screen above the nav bar */}
      <View style={{ flex: 1 }}>
        {renderActiveScreen()}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('Home')}>
            <Image
              source={require('../assets/home.png')}
              style={[
                styles.icon,
                active === 'Home' ? styles.activeIcon : styles.inactiveIcon
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.navText, active === 'Home' && styles.activeText]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('Settings')}>
            <Image
              source={require('../assets/settings.png')}
              style={[
                styles.icon,
                active === 'Settings' ? styles.activeIcon : styles.inactiveIcon
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.navText, active === 'Settings' && styles.activeText]}>
              Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('Profile')}>
            <Image
              source={require('../assets/profile.png')}
              style={[
                styles.icon,
                active === 'Profile' ? styles.activeIcon : styles.inactiveIcon
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.navText, active === 'Profile' && styles.activeText]}>
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('Help')}>
            <Image
              source={require('../assets/help.png')}
              style={[
                styles.icon,
                active === 'Help' ? styles.activeIcon : styles.inactiveIcon
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.navText, active === 'Help' && styles.activeText]}>
              Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    tintColor: '#2D7DF6',
  },
  inactiveIcon: {
    tintColor: '#6E6E6E',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#6E6E6E',
  },
  activeText: {
    color: '#2D7DF6',
  },
});
