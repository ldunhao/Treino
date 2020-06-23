import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('Main');
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>MailComposer & Linking</Text>
          <Text style={styles.description} >App para treinamento</Text>
        </View>
      </View>
        
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigation} >
          <Text style={styles.buttonText}>
            Avançar
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273d48',
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  footer: {
    paddingBottom: 16,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    height: 60,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 24,
  },

  description: {
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
    paddingHorizontal: 24,
  },

  button: {
    height: 60,
    backgroundColor: '#07d5e6',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 8,
    paddingLeft: 16
  },

  buttonIcon: {
    flex: 0.2,
    width: 40,
    height:40,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 24,
  }
})

export default Home;