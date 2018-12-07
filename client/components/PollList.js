import React from 'react';
import {
  Platform,
  View,
  Text
} from 'react-native';
import Poll from './Poll'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_ALL_POLLS = gql`
 {
  polls {
    question
    id
    description
    options {
      name
      id
      votes
    }
  }
}
`

export default class PollList extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    window.setInterval(() => this.setState({twoSecondPollInterval: true}), 2000)
  }
  
  render() {
    return (
      <Query query={ GET_ALL_POLLS } pollInterval={500}>{
        ({ loading, error, data }) => {
          if (loading) return <View></View>;
          if (error) return <View></View>;
          console.log(data.polls);
          return data.polls.map(poll => <Poll key={poll.id} poll={poll}/>)

        }
      }</Query>
    )
  }
}

{/* <View>
          <View>
          <Poll question={pref.question} answers={pref.answers}>
          </Poll>
          </View>
        </View> */}
