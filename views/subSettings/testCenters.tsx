import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';


export default function TestCenters({ navigation }) {

  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../../assets/DMSerif.ttf'),
    });
  
    // Wait until font is loaded
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  

  const [centre1, setCentre1] = useState('');
  const [centre2, setCentre2] = useState('');
  const [centre3, setCentre3] = useState('');

  const handleClear = (setter) => {
    setter('');
  };

  return (
    <ImageBackground
                source={require('../../assets/gradientBg.png')}
                style={styles.background}
                resizeMode="cover"
              >
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
  <Icon name="chevron-back" size={24} color="#000" />
</TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/bell.png')} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Test Centres</Text>
      <Text style={styles.subtitle}>
        Configure up to 3 test centers that you wish to search cancellations for.
      </Text>

      {/* Centre 1 */}
      <View style={styles.inputWrapper}>
        <View style={styles.inputInner}>
          <Image source={require('../../assets/location-icon.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="Search for centre"
            placeholderTextColor="#878787"
            style={styles.input}
            value={centre1}
            onChangeText={setCentre1}
          />
        </View>
        {centre1.length > 0 && (
          <TouchableOpacity onPress={() => handleClear(setCentre1)}>
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Centre 2 */}
      <View style={styles.inputWrapper}>
        <View style={[styles.inputInner, !centre1 && styles.disabled]}>
          <Image source={require('../../assets/location-icon.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="Search for centre"
            style={styles.input}
            editable={!!centre1}
            value={centre2}
            onChangeText={setCentre2}
          />
        </View>
      </View>

      {/* Centre 3 */}
      <View style={styles.inputWrapper}>
        <View style={[styles.inputInner, !centre2 && styles.disabled]}>
          <Image source={require('../../assets/location-icon.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="Search for centre"
            style={styles.input}
            editable={!!centre2}
            value={centre3}
            onChangeText={setCentre3}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
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
    // backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    marginTop:20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  bellIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    // fontWeight: '400',
    marginTop: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#4d4d4d',
    fontWeight: '700',
    marginVertical: 10,
  },
  inputWrapper: {
    marginTop: 15,
    position: 'relative',
  },
  inputInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight:"700"
  },
  inputIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    resizeMode: 'contain',
  },
  clearText: {
    position: 'absolute',
    right: 15,
    top: 14,
    fontSize: 16,
    color: '#F00',
  },
  disabled: {
    opacity: 0.5,
  },
  saveButton: {
    backgroundColor: '#2D7DF6',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
