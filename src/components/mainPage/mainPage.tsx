import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  Pressable
} from 'react-native';

const ViewBoxesWithColorAndText: React.FC = () => {
  const [userName, onChangeuserName] = React.useState("")
  const [password, onChangePassword] = React.useState("")

  return (
    <View style={styles.contentWrapper}>
        <Text style={styles.headLineText}>Instamobile</Text>
        <TextInput
          defaultValue={'Username'}
          placeholder='Username'
          style={styles.input}
          onChangeText={onChangeuserName}
          value={userName}
        />
        <TextInput
          defaultValue={'Username'}
          placeholder='Password'
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
        <Pressable style={styles.button} onPress={() => Alert.alert('login')}>
          <Text style={{color:'white'}}>Login</Text>
        </Pressable>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Login with Facebook</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    width: '95%',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  headLineText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#00bfff',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    color: '#00bfff',
  },
  textWrapper: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ViewBoxesWithColorAndText;
