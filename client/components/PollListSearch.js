import React from 'react';
import {
  Platform,
  View,
  Text
} from 'react-native';
import Poll from './Poll'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'


const SEARCH_ALL_POLLS = gql`
  query($searchQuery: String) {
    listPolls(filter: {
      description: {
        contains: $searchQuery
      }
    }) {
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
  }
` 
export default class PollListSearch extends React.Component {
  render() {
    return (
      <Query
        query={SEARCH_ALL_POLLS}
        variables={{ searchQuery: this.props.searchQuery}}
      >
        {
        ({ loading, error, data }) => {
          if (loading) return <View></View>;
          if (error) return <View></View>;
          console.log("Reached");
          return data.polls.map(poll => <Poll key={poll.id} poll={poll}/>)

        }
      }
      </Query>
    )
  }
}

{/* <View>
          <View>
          <Poll question={pref.question} answers={pref.answers}>
          </Poll>
          </View>
        </View> */}
