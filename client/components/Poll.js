import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Option from './Option.js'

export default class Poll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pollClicked: false
    }
  }

  render() {
    return (
      <View>
        <Text>{(this.props.poll.description == null)? "": this.props.poll.description }</Text>
        <Card
          title={this.props.poll.question}
          containerStyle={{
            borderRadius: 5,
          }}
          titleStyle={
            {
              textAlign: 'left',
              paddingLeft: 10
            }
          }
        >
        {this.props.poll.options.map((option)=> {
          return (
            <Option
              pollClicked={this.state.pollClicked}
              key={option.id}
              option={option}
              press={() => {
                this.setState(
                  {pollClicked: true}
                )
              }}
            />
          );
        })}
        </Card>
      </View>
    );
  }
}
