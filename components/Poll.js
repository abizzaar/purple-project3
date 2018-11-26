import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {PollButton} from './PollButton.js'

export class Poll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pollClicked: false
    }
  }

  render() {
    return (
      <View>
        <Card 
          title={this.props.question}
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
        {this.props.answers.map((item, i)=> {
          return(
            <PollButton 
              pollClicked={this.state.pollClicked} 
              key={i} 
              item={item}
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