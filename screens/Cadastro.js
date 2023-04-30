import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';


const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        CADASTRO
      </Text>
      <Input
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
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

      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Login')}
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
  title: {
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default SignupScreen;