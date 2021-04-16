import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 'regular',
      link: props.link || false,
    };
  }

  get = () => {
    return (
      <TouchableOpacity name={this.props.name} onPress={this.props.onPress}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const content = this.get();
    return this.state.link ? (
      <Link to={this.props.path || '#'}>{content}</Link>
    ) : (
      content
    );
  }
}

const styles = StyleSheet.create({});
