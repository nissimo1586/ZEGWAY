import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import myEventsScreenStyles from './myEventsScreenStyles';

const MyEventsScreen = (props) => {
  // Using the useState hook to keep track of the events in each category
  const [selectedEvents, setSelectedEvents] = React.useState([]);
  const [eventuallyEvents, setEventuallyEvents] = React.useState([]);

  // Filtering the events based on their category
  React.useEffect(() => {
    const selected = props.selectedEvents.filter(
      (event) => event.category === 'will take part'
    );
    setSelectedEvents(selected);

    const eventually = props.selectedEvents.filter(
      (event) => event.category === 'attendance maybe'
    );
    const eventuallyIds = eventually.map((event) => event.id);
    const filteredSelected = selected.filter(
      (event) => !eventuallyIds.includes(event.id)
    );
    setEventuallyEvents(eventually);
    setSelectedEvents(filteredSelected);
  }, [props.selectedEvents]);

  // Rendering the events in separate lists
  const renderEventList = (title, events) => {
    return (
      <View style={myEventsScreenStyles.eventListContainer}>
        <Text style={myEventsScreenStyles.eventListTitle}>{title}</Text>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <View style={myEventsScreenStyles.eventListItem}>
              <Text style={myEventsScreenStyles.eventListItemText}>
                {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  // Returning the MyEventsScreen component, which includes two event lists
  return (
    <View style={myEventsScreenStyles.container}>
      {renderEventList('Will take part', selectedEvents)}
      {renderEventList('Attendance maybe', eventuallyEvents)}
    </View>
  );
};

// Mapping the selectedEvents state to props
const mapStateToProps = (state) => {
  return { selectedEvents: state.selectedEvents };
};

export default connect(mapStateToProps)(MyEventsScreen);
