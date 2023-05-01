import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import homeScreenStyles from './homeScreenStyles';
import joinIcon from '../../assets/musix2.png';
import eventIcon_no from '../../assets/heart_white_shape.png';
import eventIcon_yes from '../../assets/heart_filled_red.png';
import eventIcon_eventually from '../../assets/heart_white_shape_small.png';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addEvent, removeEvent } from '../events/selectedEventsActions';

const EventItem = (props) => {
  const { event } = props;
  const [currentIcon, setCurrentIcon] = useState(eventIcon_no);
  const [eventCategory, setEventCategory] = useState(null);
  const navigation = useNavigation();

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
    {event.image ? (
      <Image source={{ uri: event.image }} style={homeScreenStyles.eventImage} />
    ) : (
      <Image source={require('../../assets/placeholder.png')} style={homeScreenStyles.eventImage} />
    )}
    <View style={homeScreenStyles.overlay} />
  </TouchableOpacity>
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

const mapDispatchToProps = { addEvent, removeEvent };
export default connect(null, mapDispatchToProps)(EventItem);
