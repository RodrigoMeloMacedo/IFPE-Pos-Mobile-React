import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';


function CadastroScreen({ navigation, route }) {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (route.params) {
      
      const { id } = route.params
      setId(id);
      const { nome } = route.params
      setNome(nome);
      const { email } = route.params
      setEmail(email);

    }

  }, []);



  async function inserirDados() {

    await axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
      nome: nome,
      email: email,
    })
      .then(function (res) {
        navigation.navigate("Lista");
        console.log(res.data)
      })
      .catch(function (err) {
        console.log(err)
      });

  };


  return (
    <View >
      <Header
        leftComponent={<Button
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
          title="Voltar"
          onPress={() => navigation.navigate('Lista')}
        />}
        centerComponent={{ text: 'Adicionar Novo', style: { color: '#fff', fontSize: 25 } }}
      />


      <View style={styles2.container}>

        <TextInput
          style={styles2.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles2.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

          <TouchableOpacity style={styles2.button} onPress={() => inserirDados(id)}>
            <Text style={styles2.buttonText}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </View>
      );
}

      const styles2 = StyleSheet.create({
        container: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingTop: 40
  },
      title: {
        fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
      paddingTop: 40
  },
      input: {
        width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingHorizontal: 16,
      marginBottom: 16,
  },
      button: {
        backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 14,
      width: '80%',
      alignItems: 'center',
  },
      buttonText: {
        color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});


export default CadastroScreen;