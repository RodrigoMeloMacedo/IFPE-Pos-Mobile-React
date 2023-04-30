import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';



const AlteracaoCadastroScreen = ({ navigation, route }) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    console.log('Id:', id);
    console.log('Nome:', nome);
    console.log('email:', email);

  };

  useEffect(() => {
    if (route.params) {
      const { id } = route.params
      setId(id);
      const { nome } = route.params
      setNome(nome);
      const { email } = route.params
      setEmail(email);


    }

  }, [])

  async function alterar() {
    await axios.put('https://644c548917e2663b9d049ecb.mockapi.io/cliente/' + id,
      {
        nome: nome,
        email: email,

      })
      .then(function (response) {
        navigation.navigate("Lista");
        console.log(response.data)
      }).catch(function (error) {
        console.log(error);
      });

  }

  async function excluirDados() {
    await axios.delete('https://644c548917e2663b9d049ecb.mockapi.io/cliente/' + id,
    )
      .then(function (response) {
        navigation.navigate("Lista");
        console.log(response.data)
      }).catch(function (error) {
        console.log(error);
      });
  }



  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        ALTERAÇÃO
      </Text>
      <Input
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        value={nome}
        autoCapitalize="words"
      />
      <Input
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />



      <View style={styles.buttonContainer}>
        <Button
          title="Alterar"
          buttonStyle={styles.button}
          onPress={() => alterar(id)}
        />
        <Button
          title="Excluir"
          buttonStyle={styles.button}
          onPress={() => excluirDados(id)}
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

export default AlteracaoCadastroScreen;