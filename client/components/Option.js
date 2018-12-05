import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const VOTE = gql
`
mutation VOTE($optionId: ID!) {
  vote(optionId: $optionId) {
    id
    votes
  }
}
`

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionClicked: false
    };
    this.optionPressed = this.optionPressed.bind(this);
    this.buttonColor = this.buttonColor.bind(this);
  }

  optionPressed() {
    if (!this.props.pollClicked) {
      this.props.press();
      this.setState({optionClicked: true});
    }
  }

  buttonColor() {
    if (this.props.pollClicked && this.state.optionClicked) {
      return([styles.specificOptionClickEffect, {width: Math.round(this.props.option.votes * 352/ this.props.totalVotes)}]);
    } else if (this.props.pollClicked) {
      return([styles.optionClickEffect, {width: Math.round(this.props.option.votes * 352/ this.props.totalVotes)}]);
    } else {
      return([styles.optionClickEffect, {width: 0}]);
    }
  }

  buttonTextColor() {
    if (this.state.optionClicked) {
      return(styles.clickedOptionNameStyle);
    } else {
      return(styles.optionNameStyle);
    }
  }

  render() {
    return (
      <Mutation mutation={VOTE}
                variables={{ optionId: this.props.option.id}}>{
          // mutation needs function as child
          // vote is the mutation func that needs to be passed as first input
          (vote, { data }) =>
            <View style={{flex: 1}}>
              <Button
                title={this.props.option.name}
                titleStyle={this.buttonTextColor()}
                buttonStyle={styles.optionStyle}
                icon={<Text style={styles.votesStyle}>
                        { this.props.pollClicked && this.state.optionClicked ? this.props.option.votes : "" }
                      </Text>}
                iconRight
                onPress={() => {vote(); this.optionPressed()}}
                containerStyle={styles.optionContainer}
              >
                <Text></Text>
              </Button>
              <Text style={this.buttonColor()}>
              </Text>
            </View>
      }</Mutation>
    )

  }
}

const styles = StyleSheet.create({
  optionStyle: {
    backgroundColor: "rgba(0,0,0,0.05)",
    width: 'auto',
    height: 45,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  optionNameStyle: { fontWeight: "500", zIndex: 200, color: "black" },
  clickedOptionNameStyle: { fontWeight: "500", zIndex: 200, color: "white" },
  votesStyle: { fontSize: 18, fontWeight: "400" },
  optionContainer: { marginTop: 7, marginBottom: 7 },
  optionClickEffect: {
    backgroundColor: '#a8e7ff',
    zIndex: -1,
    borderRadius: 5,
    position: 'absolute',
    top: 7,
    left: 0,
    height: 45
  },
  specificOptionClickEffect: {
    backgroundColor: '#003366',
    zIndex: -1,
    borderRadius: 5,
    position: 'absolute',
    top: 7,
    left: 0,
    height: 45
  }
});
