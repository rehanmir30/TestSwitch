import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function HelpView({ navigation, activeScreen = 'Home' }) {
  const helpItems = [
    {
      id: 'Tips',
      title: 'Tips',
      icon: require('../assets/tips.png'),
      backgroundColor: '#E4F9F5',
    },
    {
      id: 'Support',
      title: 'Support',
      icon: require('../assets/support.png'),
      backgroundColor: '#E6EFFE',
    },
    {
      id: 'FAQs',
      title: 'FAQ\'s',
      icon: require('../assets/faqs.png'),
      backgroundColor: '#FFF8E1',
    },
    {
      id: 'Feedback',
      title: 'Feedback',
      icon: require('../assets/feedback.png'),
      backgroundColor: '#FFEBEE',
    },
    {
      id: 'Terms',
      title: 'Terms and Conditions',
      icon: require('../assets/terms.png'),
      backgroundColor: '#E8F5E9',
    },
    {
      id: 'Privacy',
      title: 'Privacy Policy',
      icon: require('../assets/privacy.png'),
      backgroundColor: '#F3E5F5',
    },
  ];

  const handleItemPress = (id) => {
    // Navigate to the respective screen based on the id
    navigation.navigate(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>TestSwitch</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}style={styles.notificationIcon}>
        
          <Image 
            source={require('../assets/bell.png')}
            style={styles.notificationImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Help</Text>

        {helpItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.helpItem, { backgroundColor: item.backgroundColor }]}
            onPress={() => handleItemPress(item.id)}
          >
            <View style={styles.itemLeftSection}>
              <Image source={item.icon} style={styles.itemIcon} resizeMode="contain" />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Image
              source={require('../assets/chevron-right.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}

        <View style={styles.disclaimerSection}>
          <Text style={styles.disclaimerTitle}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This Service is in no way associated or affiliated with the DVSA or any government agencies.
          </Text>
          <Text style={styles.copyrightText}>2025@TestSwitch Ltd.</Text>
          <Text style={styles.companyNumber}>Company Number 1234455</Text>
          
          <TouchableOpacity style={styles.removeAccountButton}>
            <Text style={styles.removeAccountText}>Remove Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop:20
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationImage: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  helpItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    // Remove any elevation or shadow properties
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  itemLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  disclaimerSection: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  disclaimerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  copyrightText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  companyNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  removeAccountButton: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    // Remove any elevation or shadow properties
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  removeAccountText: {
    color: '#F44336',
    fontWeight: '500',
    fontSize: 16,
  },
});