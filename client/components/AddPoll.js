import React from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native';
import { Mutation } from 'react-apollo'
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import t from "tcomb-form-native";
import gql from 'graphql-tag'

const CREATE_POLL = gql
`
  mutation CREATE_POLL($question: String!,$description:String!){
    addPoll(question:$question, description:$description) {
      id
    }
  }
`;
const Form = t.form.Form;

const User = t.struct({
  Question: t.String,
  Option1: t.String,
  Option2: t.String,
  Option3: t.String
});


export default class AddPoll extends React.Component {
    constructor(props) {
    super(props);
    this.state={};
  }
  // handleSubmit = () => {
  //   const value = this._form.getValue(); // use that ref to get the form value
  //   console.log("value: ", value);
  //   this._form.refs.input.setState({ value: {} });
  // };

  state = {};
  render() {
        return (
        <Mutation mutation={CREATE_POLL}
                variables={{ question: "This is still not working?", description:"Nothing in particular"}}>{
          // mutation needs function as child 
          // vote is the mutation func that needs to be passed as first input
          (addPoll, { data }) => 
            <View style={styles.container}>
            <Form type={User} ref={c => (this._form = c)} />
            <Button title="Submit" onPress={() => {addPoll()}} containerStyle={styles.optionContainer}/>
            </View>
     
      }</Mutation>
    )
    return (
      <View style={styles.container}>
        <Form type={User} ref={c => (this._form = c)} />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
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
