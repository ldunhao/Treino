import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

const Main = () => {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  function handleMailCompose() {
    if (email === '') {
      alert('Por favor , preencha o campo respectivo para poder enviar o email');
      return;
    }

    MailComposer.composeAsync({
      recipients: [email], //Para quem vai enviar
      subject: 'Teste MailComposer', //Assunto do Email
      body: 'Testando MailComposer',
    });

  }

  function handleWhatsapp() {
    if (whatsapp === '') {
      alert('Por favor , preencha o campo respectivo para poder enviar uma mensagem no whatsapp');
      return;
    }

    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=Teste MailComposer`);
    
    console.log(whatsapp)
  }

  return (
    <KeyboardAvoidingView style={{ flex:1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
      <ImageBackground  
        source={require('../../assets/background.png')} 
        style={styles.container}
        imageStyle={styles.background}
      >
        
        <View style={styles.main}>
          <Text style={styles.title}>Contatos</Text>
        </View>

        <View style={{flex: 1}} >
          <View style={styles.inputGroup} >
            

            <View>
                <Text style={styles.description}>Mande um email para:</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Digite seu email"
                  value={email}
                  onChangeText={setEmail}
                  autoCorrect={false}
                />
            </View>
            
            <View>
              <Text style={styles.description}>Mande uma mensagem para:</Text>
              <TextInput 
                style={styles.input}
                placeholder="Digite seu número"
                value={whatsapp}
                onChangeText={setWhatsapp}
                autoCorrect={false}
              />
            </View>
          </View>
          
          <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleMailCompose}>
              <Icon name="mail" size={20} color="#fff" />
              <Text style={styles.buttonText}>Email</Text>
            </RectButton>

            <RectButton style={styles.button} onPress={handleWhatsapp}>
              <FontAwesome name="whatsapp" size={20} color="#fff" />
              <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273d48',
    flex: 1,
    alignItems: 'center',
  },

  main: {
    flex: 1,
    paddingTop:50,
    maxHeight:200,
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  background: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.1,
  },

  inputGroup: {
    paddingBottom: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    color: '#fff'
  },

  description: {
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
    color: '#fff',
    paddingVertical: 8,
  },

  button: {
    backgroundColor: '#07d5e6',
    height: 60,
    borderRadius: 10,
    width: 140,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 16,
    paddingHorizontal:16,
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
  },

  input: {
    height: 60,
    width: 260,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
})

export default Main;