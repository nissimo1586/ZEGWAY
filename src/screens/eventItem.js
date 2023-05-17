import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import homeScreenStyles from "./homeScreenStyles";
import joinIcon from "../../assets/musix2.png";
import eventIcon_no from "../../assets/heart_white_shape.png";
import eventIcon_yes from "../../assets/heart_filled_red.png";
import eventIcon_eventually from "../../assets/heart_white_shape_small.png";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addEvent, removeEvent } from "../events/selectedEventsActions";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { Share } from "react-native";

const EventItem = (props) => {
	const { event } = props;
	const [currentIcon, setCurrentIcon] = useState(eventIcon_no);
	const [eventCategory, setEventCategory] = useState(null);
	const navigation = useNavigation();

	console.log("Video URL: ", event.video);

	const toggleIconStatus = () => {
		let newIcon, newCategory;
		if (currentIcon === eventIcon_no) {
			newIcon = eventIcon_yes;
			newCategory = "will take part";
			props.addEvent({ ...event, category: newCategory });
		} else if (currentIcon === eventIcon_yes) {
			newIcon = eventIcon_eventually;
			newCategory = "attendance maybe";
			props.addEvent({ ...event, category: newCategory });
		} else {
			newIcon = eventIcon_no;
			newCategory = null;
			props.removeEvent(event.id);
		}
		setCurrentIcon(newIcon);
		setEventCategory(newCategory);
	};

	const shareEvent = (event) => {
		const { title, date, time, location } = event;
		const message = `Check out this event:\n\nTitle: ${title}\nDate: ${date}\nTime: ${time}\nLocation: ${location}`;

		Share.share({
			message,
		});
	};

	const saveEvent = (event) => {
		// logic to save event in calendar
	};

	const reportEvent = (event) => {
		// logic to report event
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => {
				navigation.navigate("EventDetails", { event });
			}}
		>
			<View style={homeScreenStyles.eventContainer}>
				<Image source={joinIcon} style={homeScreenStyles.eventCategoryIcon} />
				<View style={homeScreenStyles.eventTitleTextContainer}>
					<Text style={homeScreenStyles.eventDateTimeText}>
						{event.date} | {event.time}
					</Text>
				</View>
				<View style={homeScreenStyles.eventImageContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate("EventDetails", { event })}
					>
						{event.video ? (
							<Video
								source={{ uri: event.video }}
								style={homeScreenStyles.eventImage}
								//useNativeControls
								shouldPlay={true}
								resizeMode="cover"
								isLooping
							/>
						) : event.image ? (
							<Image
								source={{ uri: event.image }}
								style={homeScreenStyles.eventImage}
							/>
						) : (
							<Image
								source={require("../../assets/placeholder.png")}
								style={homeScreenStyles.eventImage}
							/>
						)}

						<View style={homeScreenStyles.overlay} />
					</TouchableOpacity>
				</View>

				<View style={homeScreenStyles.eventDetailsContainer}>
					<View style={homeScreenStyles.eventDetailsContainer}>
						<Text style={homeScreenStyles.eventTitleText}>{event.title}</Text>
						<Text style={homeScreenStyles.eventDateTimeText}>
							{event.date} | {event.time}
						</Text>
						<Text style={homeScreenStyles.eventLocationText}>
							{event.location}
						</Text>
					</View>

					<View style={homeScreenStyles.bottomRowContainer}>
						<TouchableOpacity onPress={toggleIconStatus}>
							<Image
								source={currentIcon}
								style={homeScreenStyles.eventFooterButtonIcon}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								homeScreenStyles.bottomRowItem,
								{ marginRight: homeScreenStyles.iconStyle.marginRight },
							]}
							onPress={() => shareEvent(event)}
						>
							<Icon
								name="share-social-outline"
								size={homeScreenStyles.iconStyle.size}
								color={homeScreenStyles.iconStyle.color}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								homeScreenStyles.bottomRowItem,
								{ marginRight: homeScreenStyles.iconStyle.marginRight },
							]}
							onPress={() => saveEvent(event)}
						>
							<Icon
								name="calendar-outline"
								size={homeScreenStyles.iconStyle.size}
								color={homeScreenStyles.iconStyle.color}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={homeScreenStyles.bottomRowItem}
							onPress={() => reportEvent(event)}
						>
							<Icon
								name="alert-circle-outline"
								size={homeScreenStyles.iconStyle.size}
								color={homeScreenStyles.iconStyle.color}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const mapDispatchToProps = { addEvent, removeEvent };
export default connect(null, mapDispatchToProps)(EventItem);
