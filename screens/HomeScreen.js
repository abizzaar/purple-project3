import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { WebBrowser } from 'expo';
import { Header } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import { Poll } from '../components/Poll';

const pres = {
  question: 'Who will win the next presidential election?',
  answers: [
    {
      title: 'Gabe',
      number: 1
    },
    {
      title: 'Omkar',
      number: 4
    },
    {
      title: 'May',
      number: 3
    },
    {
      title: 'Mo',
      number: 9
    },
    {
      title: 'Abizar',
      number: 3
    }
  ]
}

const makeup = {
  question: "What's your favorite makeup brand for mascara?",
  answers: [
    {
      title: 'Bare Minerals',
      number: 3
    },
    {
      title: 'L\'Oreal',
      number: 1
    },
    {
      title: 'MAC',
      number: 5
    }
  ]
}

const pref = {
  question: "Vim or emacs?",
  answers: [
    {
      title: 'Vim',
      number: 31
    },
    {
      title: 'EMacs',
      number: 2
    }
  ]
}

const pollArray = [];

const addQuestionToPollArray = (pollArray) => {
  pollArray.push(pres, vimEmacs, makeup);
  console.log(pollArray);
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
          }}
          centerComponent={{ text: 'Pollen!', style: { color: '#000', fontSize: 30 } }}
        >
        </Header>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Poll question={pref.question} answers={pref.answers}>
            </Poll>
          </View>
          <View>
            <Poll question={pres.question} answers={pres.answers}>
            </Poll>
          </View>
          <View>
            <Poll question={makeup.question} answers={makeup.answers}>
            </Poll>
          </View>
        </ScrollView>
      </View>
    );
  }
  // We could just map through all the available posts for that area and display those

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


/*

<View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

<View style={styles.getStartedContainer}>
  {this._maybeRenderDevelopmentModeWarning()}

  <Text style={styles.getStartedText}>Get started by opening</Text>

  <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
    <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
  </View>

  <Text style={styles.getStartedText}>
    Change this text and your app will automatically reload.
  </Text>
</View>

<View style={styles.helpContainer}>
  <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
    <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
  </TouchableOpacity>
</View>
*/
