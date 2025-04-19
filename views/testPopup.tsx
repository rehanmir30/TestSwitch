import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TouchableOpacity, 
  StyleSheet, 
  Pressable,
  Image
} from 'react-native';
import { useFonts } from 'expo-font';

// If using expo, uncomment the next line
// import { BlurView } from 'expo-blur';

const TestSwitchPopup = ({ visible, onClose, onAccept, onDecline }) => {

  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../assets/DMSerif.ttf'),
      'DMSans': require('../assets/DMSans.ttf'),
    });
  
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }

  // Timer countdown logic
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 18); // 9:18 in seconds
  const timerRef = useRef(null);

  useEffect(() => {
    if (visible && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visible, timeLeft]);

  useEffect(() => {
    if (!visible) {
      // Reset timer when modal closes
      setTimeLeft(9 * 60 + 18);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [visible]);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        {/* This is the blurred background */}
        <Pressable style={styles.backdrop} onPress={onClose}>
          {/* If using Expo, replace this View with BlurView */}
          <View style={styles.blurEffect} />
          {/* For Expo, use this instead:
          <BlurView intensity={80} style={styles.blurEffect} /> */}
        </Pressable>

        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Test Found</Text>
          
          <Text style={styles.modalText}>
            We have found the following test just for you. It has been reserved for 15 minutes.
          </Text>

          <View style={styles.earlierNotice}>
            <Text style={styles.earlierText}>24 days earlier!</Text>
            <Text style={styles.earlierSubtext}>This test is earlier than your current test date</Text>
          </View>

          <View style={styles.timerContainer}>
            <Image 
              source={require('../assets/timer-icon.png')} 
              style={styles.timerIcon} 
            />
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
          </View>

          <View style={[styles.alertCard, { backgroundColor: '#FFEFEC', width: 300 }]}>
             <View style={styles.alertLeftSection}>
               <View style={[styles.alertIconContainer, { backgroundColor: '#FFD6CE' }]}>
                 <Image source={require('../assets/car-icon.png')} style={styles.alertIcon} />
               </View>
             </View>
             <View style={styles.alertContent}>
               <Text style={styles.alertDay}>Friday</Text>
               <View style={styles.alertDetails}>
                 <View style={styles.alertDetail}>
                   <Image source={require('../assets/calendar-icon.png')} style={styles.detailIcon} />
                   <Text style={styles.detailText}>6th June 2025</Text>
                 </View>
                 <View style={styles.alertDetail}>
                   <Image source={require('../assets/clock-icon.png')} style={styles.detailIcon} />
                   <Text style={styles.detailText}>02:42 PM</Text>
                 </View>
               </View>
               <View style={styles.alertDetail}>
                 <Image source={require('../assets/location-icon.png')} style={styles.detailIcon} />
                 <Text style={styles.detailText}>Inverness (Longman Drive)</Text>
               </View>
              
             </View>
           </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={onAccept}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.declineButton}
              onPress={onDecline}
            >
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

  alertCard: {
    flexDirection: 'row',
    // marginRight:20,
    // marginLeft:20,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  alertLeftSection: {
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  alertIconContainer: {
    width: 45,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  alertContent: {
    flex: 1,
    marginStart:5,
  },
  alertDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily:"DMSans",
    color: '#000',
  },
  alertDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  alertDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    marginRight: 12,
  },
  detailIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  detailText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    fontFamily:"DMSans"
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blurEffect: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This simulates blur effect
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 32,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'DMSerifDisplay', // Similar to the font in the image
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    fontFamily:"DMSans",
    paddingHorizontal: 15,
  },
  earlierNotice: {
    backgroundColor: '#003F8C',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    marginVertical: 15,
  },
  earlierText: {
    color: 'white',
    fontWeight:"bold",
    fontFamily:"DMSans",
    fontSize:20,
    textAlign: 'center',
  },
  earlierSubtext: {
    color: 'white',
    textAlign: 'center',
    // fontWeight:"bold",
    fontFamily:"DMSans",
    fontSize:14,
  },
  timerContainer: {
    flexDirection: 'row',
    backgroundColor: '#003F8C',
    borderRadius: 25,
    padding: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  timerIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: 'white',
  },
  timerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appointmentCard: {
    backgroundColor: '#FCE7F6', // Light pink background
    borderRadius: 15,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  dayText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  appointmentIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  dateText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  acceptButton: {
    backgroundColor: '#407BFF', // Blue color
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  declineButton: {
    backgroundColor: '#FFE4E4', // Light pink color
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  acceptText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  declineText: {
    color: '#FB504E', // Pinkish-red color
    fontWeight: 'bold',
    fontFamily:"DMSans",
    fontSize: 16,
  },
});

export default TestSwitchPopup;