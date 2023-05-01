/*import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../events/selectedEventsActions';
import homeScreenStyles from './homeScreenStyles';
import joinIcon from '../../assets/musix2.png';
import eventIcon_no from '../../assets/heart_white_shape.png';
import eventIcon_yes from '../../assets/heart_filled_red.png';
import eventIcon_eventually from '../../assets/heart_white_shape_small.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://178.254.23.143:5000/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  const renderEvent = (event) => {
    const [currentIcon, setCurrentIcon] = useState(eventIcon_no);
    const [eventCategory, setEventCategory] = useState(null);

    const toggleIconStatus = () => {
      let newIcon, newCategory;
      if (currentIcon === eventIcon_no) {
        newIcon = eventIcon_yes;
        newCategory = 'will take part';
        props.addEvent({ ...event, category: newCategory });
      } else if (currentIcon === eventIcon_yes) {
        newIcon = eventIcon_eventually;
        newCategory = 'attendance maybe';
        props.addEvent({ ...event, category: newCategory });
      } else {
        newIcon = eventIcon_no;
        newCategory = null;
        props.removeEvent(event.id);
      }
      setCurrentIcon(newIcon);
      setEventCategory(newCategory);
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('EventDetails', { event });
        }}>
        <View style={homeScreenStyles.eventContainer}>
          <Image source={joinIcon} style={homeScreenStyles.eventCategoryIcon} />
          <View style={homeScreenStyles.eventTitleTextContainer}>
            <Text style={homeScreenStyles.eventDateTimeText}>
              {event.date} | {event.time}
            </Text>
          </View>
          <View style={homeScreenStyles.eventImageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event })}>
              <Image source={{ uri: event.image }} style={homeScreenStyles.eventImage} />
            </TouchableOpacity>
            <View style={homeScreenStyles.overlay} />
          </View>
          <View style={homeScreenStyles.eventDetailsContainerbf}>
            <View style={homeScreenStyles.eventFooterContainer}>
              <TouchableOpacity onPress={toggleIconStatus}>
                <Image source={currentIcon} style={homeScreenStyles.eventFooterButtonIcon} />
              </TouchableOpacity>
            </View>
            <View style={homeScreenStyles.eventDetailsContainer}>
              <Text style={homeScreenStyles.eventTitleText}>{event.title}</Text>
              <Text style={homeScreenStyles.eventDateTimeText}>
                {event.date} | {event.time}
              </Text>
              <Text style={homeScreenStyles.eventLocationText}>{event.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={homeScreenStyles.container}>
      <ScrollView>
        {events.map((event) => {
          return renderEvent(event);
        })}
      </ScrollView>
    </View>
  );
  };
  
// Wrap the HomeScreen with the connect() function
const mapDispatchToProps = { addEvent, removeEvent };
export default connect(null, mapDispatchToProps)(HomeScreen);*/

import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import homeScreenStyles from './homeScreenStyles';
import EventItem from './eventItem';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://178.254.23.143:5000/api/events')
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
