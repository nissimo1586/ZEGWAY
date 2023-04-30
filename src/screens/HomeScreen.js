import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Importing event data and styles
import events from '../events/events';
import homeScreenStyles from './homeScreenStyles';

import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../events/selectedEventsActions';

// Importing Linking and images
import { Linking } from 'react-native';
import joinIcon from '../../assets/musix2.png';
import eventIcon_no from '../../assets/heart_white_shape.png';
import eventIcon_yes from '../../assets/heart_filled_red.png';
import eventIcon_eventually from '../../assets/heart_white_shape_small.png';


// Importing React and the useState hook
import React, { useState } from 'react';

// Importing useNavigation
import { useNavigation } from '@react-navigation/native';

// Defining the HomeScreen component
const HomeScreen = (props) => {
  // Using useNavigation to get access to the navigation prop
  const navigation = useNavigation();

  // Defining a function to render a single event
  const renderEvent = (event) => {
    // Using the useState hook to keep track of the current heart icon
    const [currentIcon, setCurrentIcon] = useState(eventIcon_no);

    // Defining the categories for the My Events screen
    const CATEGORIES = ['will take part', 'attendance maybe'];

    // Using the useState hook to keep track of the event category
    const [eventCategory, setEventCategory] = useState(null);

    // Toggling the icon status and category when the icon is clicked
    const toggleIconStatus = () => {
      let newIcon, newCategory;
      if (currentIcon === eventIcon_no) {
        newIcon = eventIcon_yes;
        newCategory = 'will take part';
        props.addEvent({ ...event, category: newCategory }); // Dispatch the addEvent action
      } else if (currentIcon === eventIcon_yes) {
        newIcon = eventIcon_eventually;
        newCategory = 'attendance maybe';
        props.addEvent({ ...event, category: newCategory }); // Dispatch the addEvent action
      } else {
        newIcon = eventIcon_no;
        newCategory = null;
        props.removeEvent(event.id); // Dispatch the removeEvent action
      }
      setCurrentIcon(newIcon);
      setEventCategory(newCategory);
    };

    // Returning a TouchableOpacity that wraps around the event details
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('EventDetails', { event });
        }}>
        {/* Defining the event container */}
        <View style={homeScreenStyles.eventContainer}>
          <Image source={joinIcon} style={homeScreenStyles.eventCategoryIcon} />

          {/* Displaying the date and time */}
          <View style={homeScreenStyles.eventTitleTextContainer}>
            <Text style={homeScreenStyles.eventDateTimeText}>
              {event.date} | {event.time}
            </Text>
          </View>

          {/* Displaying the event image */}
          <View style={homeScreenStyles.eventImageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event })}>
              <Image
                source={{ uri: event.image }}
                style={homeScreenStyles.eventImage}
              />
            </TouchableOpacity>
            <View style={homeScreenStyles.overlay} />
          </View>

          {/* Displaying the event title, date/time, and location */}
          <View style={homeScreenStyles.eventDetailsContainerbf}>
            {/* Displaying the heart icon,"Maybe" button, and "Menu" button */}
<View style={homeScreenStyles.eventFooterContainer}>
<TouchableOpacity onPress={toggleIconStatus}>
<Image
               source={currentIcon}
               style={homeScreenStyles.eventFooterButtonIcon}
             />
</TouchableOpacity>
</View>
<View style={homeScreenStyles.eventDetailsContainer}>
<Text style={homeScreenStyles.eventTitleText}>{event.title}</Text>
<Text style={homeScreenStyles.eventDateTimeText}>
{event.date} | {event.time}
</Text>
<Text style={homeScreenStyles.eventLocationText}>
{event.location}
</Text>
</View>
</View>
</View>
</TouchableOpacity>
);
};

// Returning the HomeScreen component, which includes a ScrollView that
// maps over the events and renders each one using the renderEvent function
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
export default connect(null, mapDispatchToProps)(HomeScreen);
