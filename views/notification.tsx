import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image ,ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
// Sample notification data
const notifications = [
  {
    id: '1',
    icon: '🔄',
    title: 'New Update',
    message: 'We\'re thrilled to introduce the latest...',
    time: '34m ago'
  },
  // You can add more notifications here later if needed
];

export default function NotificationsScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
        'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
        'DMSerif': require('../assets/DMSerif.ttf'),
        'DMSans': require('../assets/DMSans.ttf'),
      });
    
      // Wait until font is loaded
      if (!fontsLoaded) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        );
      }
  return (
    <ImageBackground
                    source={require('../assets/gradientBg.png')}
                    style={styles.background}
                    resizeMode="cover"
                  >
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
      
      {/* Notifications content */}
      <ScrollView style={styles.contentContainer}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationItem}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{notification.icon}</Text>
              </View>
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No notifications yet</Text>
          </View>
        )}
      </ScrollView>
      
      {/* Bottom indicator */}
      <View style={styles.bottomIndicatorContainer}>
        <View style={styles.bottomIndicator} />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#f0f4f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40, // To account for status bar height
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily:"DMSerifDisplay",
    color: '#000',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderColor: '#dbdbdb',
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  notificationTime: {
    fontSize: 14,
    color: '#8d8d8d',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#000',
    lineHeight: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#888',
  },
  bottomIndicatorContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomIndicator: {
    width: 70,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
  },
});