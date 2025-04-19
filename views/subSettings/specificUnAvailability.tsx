import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image
} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SpecificUnAvailability({ navigation }) {
  const [unavailabilities, setUnavailabilities] = useState([
    {
      id: 1,
      fromDate: '18-03-2025',
      fromTime: '03:14',
      untilDate: '27-03-2025',
      untilTime: '03:14',
    },
    {
      id: 2,
      fromDate: '18-03-2025',
      fromTime: '03:14',
      untilDate: '27-03-2025',
      untilTime: '03:14',
    },
  ]);

  const handleEdit = (id) => {
    console.log('Edit ID:', id);
  };

  const handleDelete = (id) => {
    setUnavailabilities(prev => prev.filter(item => item.id !== id));
  };

  const handleAddNew = () => {
    navigation.navigate('AddSpecificUnAvailability');
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
      <ScrollView contentContainerStyle={styles.scrollContent}>

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

        <Text style={styles.title}>Specific Unavailability</Text>
        <Text style={styles.subtitle}>
          Set your general specific periods of unavailability, such as appointments and holidays.
        </Text>

        <Text style={styles.sectionTitle}>Unavailability</Text>

        {unavailabilities.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.label}>From</Text>
                <Text style={styles.dateText}>{item.fromDate}</Text>
                <Text style={styles.timeText}>{item.fromTime}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.label}>Until</Text>
                <Text style={styles.dateText}>{item.untilDate}</Text>
                <Text style={styles.timeText}>{item.untilTime}</Text>
              </View>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.addNewButton} onPress={handleAddNew}>
          <Text style={styles.addNewText}>ADD NEW</Text>
        </TouchableOpacity>
      </ScrollView>
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
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
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
  scrollContent: {
    // padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
    fontFamily:"DMSerifDisplay"
  },
  subtitle: {
    fontSize: 18,
    color: '#4d4d4d',
    marginBottom: 20,
    fontFamily:"DMSans",
    fontWeight:"bold"
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily:"DMSerifDisplay",
    marginBottom: 10,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    color: '#000',
    fontFamily:"DMSans"
  },
  dateText: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily:"DMSans",
    fontWeight:"bold",
    color: '#000',
  },
  timeText: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily:"DMSans",
    fontWeight:"bold",
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#DBE6FF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius:8,
    marginRight:4
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#FFE4E4',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius:8,
    marginLeft:4
  },
  editText: {
    color: '#016BEC',
    fontWeight: '700',
    fontSize:16,
    fontFamily:"DMSan"
  },
  deleteText: {
    color: '#FB504E',
    fontWeight: '700',
    fontSize:16,
    fontFamily:"DMSans"
  },
  addNewButton: {
    backgroundColor: '#016BEC',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  addNewText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"DMSans"
  },
});
