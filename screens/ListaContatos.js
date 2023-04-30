import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { Avatar, Header, Icon, ListItem } from 'react-native-elements';


const ListaScreen = ({ navigation }) => {

  const [list, setList] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {

    async function consultarDados() {
      await axios.get('https://644c548917e2663b9d049ecb.mockapi.io/cliente/')
        .then(function (response) {
          setList(response.data);
          console.log(response.data)
        }).catch(function (error) {
          console.log(error)
        });
    }
    consultarDados();
  }, [isFocused])





  return (
    <View>
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
          onPress={() => navigation.navigate('Login')}
        />}
        rightComponent={<Button
          title="Adicionar +"
          onPress={() => navigation.navigate('CadastroContatos')}
        />}
        centerComponent={{ text: 'Lista de Dados', style: { color: '#fff', fontSize: 25 } }}
      />
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => navigation.navigate('AlteracaoCadastro',
            {
              nome: l.nome,
              email: l.email,
              id: l.id
            })} >
            <Avatar source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }

    </View>
  );
};

export default ListaScreen;