import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Sample data for the driving tips
const drivingTipsData = [
  {
    id: '1',
    title: 'Arriving Early and Well Rested',
    content: "Arrive at least 15 minutes before your test. Being well-rested improves focus and reaction times during your driving test. Get a good night's sleep before your test day."
  },
  {
    id: '2',
    title: 'Know Your Test Route',
    content: 'Familiarize yourself with common test routes in your area. Practice driving in these areas to build confidence for the actual test.'
  },
  {
    id: '3',
    title: 'Vehicle Checks Before Test',
    content: 'Ensure all lights, signals, horn, and wipers are working properly. Check tire pressure and fluid levels. Make sure your vehicle registration and insurance are up to date.'
  },
  {
    id: '4',
    title: 'Mirror and Blind Spot Checks',
    content: "Exaggerate head movements when checking mirrors and blind spots so the examiner can see you're doing proper checks. Develop a habit of checking mirrors every 5-8 seconds."
  },
  {
    id: '5',
    title: 'Speed Control',
    content: "Always observe speed limits and adjust according to conditions. Don't drive too slowly as this can be considered dangerous too."
  },
  {
    id: '6',
    title: 'Proper Signaling',
    content: 'Signal well in advance before making turns or changing lanes. Cancel your signal after completing the maneuver.'
  },
  {
    id: '7',
    title: 'Smooth Braking and Acceleration',
    content: 'Avoid sudden stops or jerky acceleration. Brake early and gently when approaching stops or turns.'
  },
  {
    id: '8',
    title: 'Stay Calm and Focused',
    content: 'If you make a mistake, stay calm and continue driving safely. Focus on the current task rather than worrying about previous errors.'
  },
];

// Individual expandable tile component
const ExpandableTile = ({ title, content, isExpanded, onPress }) => {
  return (
    <View style={styles.tileContainer}>
      <TouchableOpacity style={styles.tileHeader} onPress={onPress}>
        <Text style={styles.tileTitle}>{title}</Text>
        <Image 
          source={isExpanded ? require('../../assets/chevron-up.png') : require('../../assets/chevron-down.png')} 
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.tileContent}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default function Tips({ navigation }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Driving Test Tips</Text>
          <Text style={styles.subtitle}>Find our expert tips to passing your driving test the first time.</Text>
        </View>
      </View>

      <ScrollView style={styles.tilesContainer}>
        {drivingTipsData.map((tip) => (
          <ExpandableTile
            key={tip.id}
            title={tip.title}
            content={tip.content}
            isExpanded={expandedId === tip.id}
            onPress={() => toggleExpand(tip.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
    marginBottom: 10,
  },
  titleContainer: {
    marginTop: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  tilesContainer: {
    padding: 10,
  },
  tileContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  tileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
  tileContent: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
});