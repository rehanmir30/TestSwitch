import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Sample FAQ data
const faqData = [
  {
    id: '1',
    question: 'What is TestSwitch?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    id: '2',
    question: 'What is TestSwitch?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    id: '3',
    question: 'What is TestSwitch?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    id: '4',
    question: 'What is TestSwitch?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
  {
    id: '5',
    question: 'What is TestSwitch?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
  },
];

export default function FAQs({ navigation }) {
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
        
        <TouchableOpacity style={styles.bellIconContainer}>
          <View style={styles.bellIcon}>
            <Text style={styles.bellIconText}>🔔</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>FAQ's</Text>
        <Text style={styles.subtitle}>You can get info from FAQ's</Text>
        
        {/* FAQ Items */}
        <View style={styles.faqList}>
          {faqData.map((faq) => (
            <View key={faq.id} style={styles.faqItem}>
              <Text style={styles.questionText}>{faq.question}</Text>
              <Text style={styles.answerText}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    // backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40, // To account for status bar height
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#000',
  },
  bellIconContainer: {
    padding: 5,
  },
  bellIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  bellIconText: {
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4d4d4d',
    marginBottom: 20,
  },
  faqList: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 24,
    marginBottom: 5,
    color: '#000',
  },
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#676767',
  },
});