import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

export default class Poll extends React.Component {
  render() {
    return (
      <View>
        <Card title="a sample card">
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </Card>
      </View>
    );
  }
}