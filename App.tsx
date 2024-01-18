import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  NativeModules,
  Button,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  const {DeviceIdModule} = NativeModules;
  const [id, setId] = useState('Press the button to get The Device ID');

  const getId = () => {
    DeviceIdModule.getPhoneID()
      .then((res: string) => {
        setId('ID: ' + res);
        Alert.alert('You Getting device ID 👍', res);

        console.log('ID', res);
      })
      .catch((err: any) => {
        console.error(err);
        Alert.alert('Error', 'Not getting device ID 😢');
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.id}>{id}</Text>
      <Button title="Get Id" onPress={getId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
