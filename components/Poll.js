import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

export class Poll extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card title={this.props.question}>
          <Text style={{marginBottom: 10}}>
            Here is where we can have the anwers
          </Text>
        </Card>
      </View>
    );
  }
}