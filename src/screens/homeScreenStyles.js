import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#0e0e0e',
  },

  eventContainer: {
    width: '100%',
    backgroundColor: '#272727',
    borderRadius: 3,
    marginBottom: 5,
  },
  eventTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTitle: {
    marginLeft: 10,
  },
  eventTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#c6c6c6',
    marginLeft: 20,
    marginTop: 10,
  },
  eventLocationText: {
    fontSize: 16,
    color: '#c6c6c6',
    marginLeft: 20,
  },
  eventDateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  eventDateTimeText: {
    fontSize: 16,
    color: '#FFC',
    marginLeft: 20,
  },
  eventIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  eventLogo: {
    height: '10%',
    width: '15%',
    marginLeft: 5,
    zIndex: 1,
  },

  eventTitleTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    zIndex: 1,
    position: 'absolute',
    top: 40,
    right: 0,
  },

  eventDetailsContainer: {
    marginBottom: 20,
    marginLeft: 20,
  },

  eventDetailsContainerbf: {
    marginLeft: 30,
    flexDirection: 'row',

    alignItems: 'center',
  },

  eventFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  eventFooterButton: {
    flex: 1,
    backgroundColor: '#FFC',
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
  },
  eventFooterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventFooterButtonIcon: {
    height: 40,
    width: 40,
  },
  eventCategoryIcon: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  eventImageIcon: {
    height: 40,
    width: 40,
  },
  eventImage: {
    width: '97%',
    height: 250,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 15,
    alignSelf: 'center',
    marginTop: 40,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default homeScreenStyles;
