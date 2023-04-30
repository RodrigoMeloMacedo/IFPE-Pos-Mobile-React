import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{ uri: 'https://i.pravatar.cc/150' }}
        containerStyle={styles.avatar}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="CADASTRAR"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        />
        <Button
          title="ENTRAR"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Lista')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default LoginScreen;


