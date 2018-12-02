import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


export default class Option extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button
        title={this.props.option.name}
        titleStyle={{ fontWeight: "500", zIndex: 200, color: "black" }}
        buttonStyle={{
          backgroundColor: "rgba(0,0,0,0.05)",
          width: 'auto',
          height: 45,
          borderColor: "transparent",
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
        }}
        icon={<Text style={{fontSize: 18, fontWeight: "400"}}>
                {
                  this.props.pollClicked ? this.props.option.votes : ""
                }
              </Text>}
        iconRight
        onPress={this.props.press}
        containerStyle={{ marginTop: 7, marginBottom: 7 }}
      >
        <Text></Text>
      </Button>
      <Text style={{
        backgroundColor: '#a8e7ff',
        width: this.props.pollClicked ? this.props.option.votes * 20 : 0 ,
        zIndex: -1,
        borderRadius: 5,
        position: 'absolute',
        top: 7,
        left: 0,
        height: 45
      }}>
      </Text>
    </View>
    )
    
  }
}


