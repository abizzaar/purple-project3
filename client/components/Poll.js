import React from "react";
import { View, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Option from "./Option.js";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  Option: t.list(t.String)
});

var options = {
  auto: "placeholders"
};

export default class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollClicked: false
    };
    this.getTotalVotes = this.getTotalVotes.bind(this);
  }

  getTotalVotes() {
    var total = 0;
    for (var i = 0; i < this.props.poll.options.length; i++) {
      total = total + this.props.poll.options[i].votes;
    }
    return total;
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.poll.description == null
            ? ""
            : this.props.poll.description}
        </Text>
        <Card
          title={this.props.poll.question}
          containerStyle={{
            borderRadius: 5
          }}
          titleStyle={{
            textAlign: "left",
            paddingLeft: 10
          }}
        >
          {this.props.poll.options.map(option => {
            return (
              <Option
                pollClicked={this.state.pollClicked}
                key={option.id}
                option={option}
                totalVotes={this.getTotalVotes()}
                press={() => {
                  this.setState({ pollClicked: true });
                }}
              />
            );
          })}
          <Form type={User} ref={c => (this._form = c)} options={options} />
        </Card>
      </View>
    );
  }
}
