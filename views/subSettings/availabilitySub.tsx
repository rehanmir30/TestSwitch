import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground,StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function AvailabilitySub({ navigation }) {
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState(new Date());
  const [untilDate, setUntilDate] = useState(new Date());
  const [untilTime, setUntilTime] = useState(new Date());

  const [pickerMode, setPickerMode] = useState(null);

  const showPicker = (type) => setPickerMode(type);
  const hidePicker = () => setPickerMode(null);

  const handleConfirm = (date) => {
    if (pickerMode === 'fromDate') setFromDate(date);
    else if (pickerMode === 'fromTime') setFromTime(date);
    else if (pickerMode === 'untilDate') setUntilDate(date);
    else if (pickerMode === 'untilTime') setUntilTime(date);
    hidePicker();
  };

  const [fontsLoaded] = useFonts({
        'DMSerifDisplay': require('../../assets/DMSerif-Display.ttf'),
        'DMSerif': require('../../assets/DMSerif.ttf'),
        'DMSans': require('../../assets/DMSans.ttf'),
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
                    source={require('../../assets/gradientBg.png')}
                    style={styles.background}
                    resizeMode="cover"
                  >
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
             <View style={styles.header}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                 <Icon name="chevron-back" size={24} color="#000" />
               </TouchableOpacity>
               <TouchableOpacity
                                           onPress={() => navigation.navigate('Notification')}
                                           style={styles.notificationIcon}
                                         >
                                           
                                                         <Image source={require('../../assets/bell.png')} style={styles.notificationIcon} />
                                                       
                                         </TouchableOpacity>
             </View>

        {/* Title */}
        <Text style={styles.title}>Availability</Text>
        <Text style={styles.subtitle}>Set the specific period</Text>

        {/* From Section */}
        <Text style={styles.sectionLabel}>From</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.inputBox} onPress={() => showPicker('fromDate')}>
            <Image source={require('../../assets/calendar-icon.png')} style={styles.inputIcon} />
            <Text style={styles.inputText}>{moment(fromDate).format('DD-MM-YYYY')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputBox} onPress={() => showPicker('fromTime')}>
            <Image source={require('../../assets/clock.png')} style={styles.inputIcon} />
            <Text style={styles.inputText}>{moment(fromTime).format('HH:mm')}</Text>
          </TouchableOpacity>
        </View>

        {/* Until Section */}
        <Text style={styles.sectionLabel}>Until</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.inputBox} onPress={() => showPicker('untilDate')}>
            <Image source={require('../../assets/calendar-icon.png')} style={styles.inputIcon} />
            <Text style={styles.inputText}>{moment(untilDate).format('DD-MM-YYYY')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputBox} onPress={() => showPicker('untilTime')}>
            <Image source={require('../../assets/clock.png')} style={styles.inputIcon} />
            <Text style={styles.inputText}>{moment(untilTime).format('HH:mm')}</Text>
          </TouchableOpacity>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Date Time Picker */}
      {/* <DateTimePickerModal
        isVisible={!!pickerMode}
        mode={pickerMode?.includes('Time') ? 'time' : 'date'}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        date={new Date()}
      /> */}
    </SafeAreaView>
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
    padding: 20,
    // backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 25,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  title: {
    fontSize: 24,
    fontFamily: 'DMSerifDisplay',
    color: '#000',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#4d4d4d',
    marginBottom: 20,
    fontFamily:"DMSans",
    fontWeight:"bold"
  },
  sectionLabel: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 8,
    fontFamily:"DMSans",
    fontWeight:"bold"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    width: '48%',
    backgroundColor: '#f9f9f9',
  },
  inputIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: '#7B7B7B',
  },
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:"DMSans",
    color: '#000',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#266CE0',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"DMSans",
    letterSpacing: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
