/*import React, { useState, useEffect } from "react";
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
*/

import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import homeScreenStyles from "./homeScreenStyles";
import EventItem from "./eventItem";

import { EVENTS_API_URL } from './constants';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(EVENTS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.toString());
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

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
