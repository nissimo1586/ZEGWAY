import { StyleSheet } from 'react-native';

const myEventsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  eventListContainer: {
    marginBottom: 20,
  },
  eventListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventListItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  eventListItemText: {
    fontSize: 16,
  },
});

export default myEventsScreenStyles;
