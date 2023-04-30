// EventDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View>
      <Text>{event.title}</Text>
      <Text>{event.date} | {event.time}</Text>
      <Text>{event.location}</Text>
      <Text>{event.description}</Text>
      {/* Add more detailed event information here */}
    </View>
  );
};

export default EventDetailsScreen;
