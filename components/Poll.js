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

          <Button
            title="sample answer"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 'auto',
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            containerStyle={{ marginTop: 20 }}
          />
        </Card>
      </View>
    );
  }
}