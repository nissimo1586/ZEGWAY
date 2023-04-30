import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Linking } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const ScreenWithAppBar = ({ children }) => {
  const onMenuOptionSelect = (value) => {
    if (value === 'option1') {
      // Open a web link on click of Option 1
      Linking.openURL('https://example.com');
    } else if (value === 'option2') {
      Linking.openURL('https://example.com');
    } else {
      // Handle other menu options here
      console.log('Menu option selected:', value);
    }
  };

  return (
    <>
      <Appbar.Header>
        <Menu>
          <MenuTrigger>
            <Appbar.Action icon="menu" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              value="option1"
              onSelect={(value) => onMenuOptionSelect(value)}>
              <Text>Option 1</Text>
            </MenuOption>
            <MenuOption
              value="option2"
              onSelect={(value) => onMenuOptionSelect(value)}>
              <Text>Option 2</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Event App</Text>
      </Appbar.Header>

      <View style={{ flex: 1 }}>{children}</View>
    </>
  );
};

export default ScreenWithAppBar;
