import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import homeScreenStyles from "./homeScreenStyles";
import EventItem from "./eventItem";

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://178.254.23.143:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      <ScrollView>
        {events.map((event) => {
 return <EventItem key={event.id} event={event} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
