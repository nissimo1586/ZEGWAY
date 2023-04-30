import { View, Text, StyleSheet } from 'react-native';

const WurstScreen = () => {
  const num1 = 5;
  const num2 = 7;
  const result = num1 * num2;
  return (
    <View>
      <Text>MyEvents - Result: {result}</Text>
    </View>
  );
};

const AllEventsScreen = () => {
  return (
    <View>
      <Text>This is the AllEventsScreen component</Text>
      <WurstScreen />
    </View>
  );
};

export default AllEventsScreen;
