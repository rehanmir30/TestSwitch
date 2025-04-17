import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo icons if not already done
import { useFonts } from 'expo-font';

export default function BookNowScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../assets/DMSerif.ttf'),
    });
  
    // Wait until font is loaded
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  // State variables to store user inputs
  const [licenseNumber, setLicenseNumber] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle the Save & Preview button press
  const handleSaveAndPreview = () => {
    // Here you can add validation logic
    console.log('Saving details:', { licenseNumber, referenceNumber, email });
    // Navigate to next screen (you can replace 'NextScreen' with your actual screen name)
    // navigation.navigate('NextScreen', { licenseNumber, referenceNumber, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidView}
      >
        <ScrollView>
          {/* Header with back button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add Your Details</Text>
          </View>

          {/* Driving License Number Section */}
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, { fontFamily: 'DMSerif' }]}>Driving License Number</Text>
            <Text style={styles.inputSubtitle}>Write your driving license number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your license number"
              value={licenseNumber}
              onChangeText={setLicenseNumber}
            />
            <Text style={styles.inputExample}>e.g. TESTS00123H14FT</Text>
          </View>

          <View style={styles.separator} />

          {/* Reference Number Section */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Reference Number</Text>
            <Text style={styles.inputSubtitle}>This will be your current booking reference number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your reference number"
              value={referenceNumber}
              onChangeText={setReferenceNumber}
            />
            <Text style={styles.inputExample}>e.g. 14901276</Text>
          </View>

          <View style={styles.separator} />

          {/* Email Section */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Your Email</Text>
            <Text style={styles.inputSubtitle}>Write your email address instead of current writing.</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter you email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.inputExample}>e.g. john.doe@example.com</Text>
          </View>

          {/* Save & Preview Button */}
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => navigation.navigate('Scanning')}
          >
            <Text style={styles.saveButtonText}>SAVE & PREVIEW</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    marginTop:20
  },
  keyboardAvoidView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  backButton: {
    padding: 5,
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputSubtitle: {
    fontSize: 18,
    color: '#4d4d4d',
    marginBottom: 15,
    fontWeight:700,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputExample: {
    fontSize: 16,
    color: '#aaaaaa',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  saveButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});