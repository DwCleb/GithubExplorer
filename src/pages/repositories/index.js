import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import api from 'services/api';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositories',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={22} color={ tintColor }/>,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: false });
    const username = await AsyncStorage.getItem('@GithubExplorer:username');
    const response = await api.get(`/users/${username}/repos`);

    this.setState({ data: response.data, loading: false });
  }

  renderListItem = ({ item }) => (
    <Text>{item.full_name}</Text>
  )

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        { 
          this.state.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
        }
      </View>
    );
  }
}
