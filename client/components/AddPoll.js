import React from "react";
import { StyleSheet, Platform, View, Text } from "react-native";
import { Mutation } from "react-apollo";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import t from "tcomb-form-native";
import gql from "graphql-tag";

const CREATE_POLL = gql`
mutation CREATE_POLL($question: String!, $description: String!, $optionNames: [String!]!) {
  addPoll(question: $question, description: $description) {
    id 
    createOption(optionNames: $optionNames) {
      id
    }
  }
}
`;

const Form = t.form.Form;

const User = t.struct({
  Question: t.String,
  Description: t.String,
  Option: t.list(t.String)
});

var options = {
  fields: {
    Question: {
      label: "Enter your question"
    },
    Description: {
      label: "Describe your Poll"
    },
    Option: {
      label: "Add options"
    }
  }
};

export default class AddPoll extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const createPollMutation = (
      <Mutation
        mutation={CREATE_POLL}
      >
        {(addPoll, { data }) => (
          <View style={styles.container}>
            <Form type={User} ref={c => (this._form = c)} options={options} />
            <Button
              title="Submit"
              onPress={() => {
                console.log(this._form.getValue().Option)
                addPoll({
                  variables: {
                    question: this._form.getValue().Question,
                    description: this._form.getValue().Description,
                    optionNames: this._form.getValue().Option
                  }
                })
              }
                
              }
              containerStyle={styles.optionContainer}
            />
          </View>
        )}
      </Mutation>
    );

    return createPollMutation;

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
