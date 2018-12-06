import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  Question: t.String,
  Option1: t.String,
  Option2: t.String,
  Option3: t.String
});

export default class AddPoll extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log("value: ", value);
    this._form.refs.input.setState({ value: {} });
  };

  state = {};
  render() {
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
