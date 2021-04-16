import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.defaultIndex || 0,
    };
  }
  handleClick = index => this.setState({activeIndex: index});

  passPropsToTabs = () => {
    const {children} = this.props;
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        index: index,
        onPress: this.handleClick,
        active: index === this.state.activeIndex,
      }),
    );
  };

  renderTabContent = () => {
    const {children} = this.props;
    const {activeIndex} = this.state;
    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }
  };

  render() {
    return (
      <View>
        <View>
          <Text>{this.passPropsToTabs()}</Text>
        </View>
        <View>{this.renderTabContent()}</View>
      </View>
    );
  }
}
export const Tab = props => (
  <View
    style={{
      width: 50,
      height: 40,
      // backgroundColor: 'green',
      paddingTop: 10,
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <TouchableOpacity
      onPress={() => {
        props.onPress(props.index);
      }}>
      <Text>{props.heading}</Text>
    </TouchableOpacity>
  </View>
);

// const styles = StyleSheet.create({});
// import React,{useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// const Tabs = props => {
//   const [state, setState] = useState({
//     activeIndex: props.defaultIndex || 0,
//   });

//   const handleClick = index => setState({activeIndex: index});

//   const passPropsToTabs = () => {
//     return React.Children.map(props.children, (child, index) =>
//       React.cloneElement(child, {
//         index: index,
//         onPress: handleClick,
//         active: index === state.activeIndex,
//       }),
//     );
//   };

//   const renderTabContent = () => {
//     if (props.children[state.activeIndex]) {
//       return props.children[state.activeIndex].props.children;
//     }
//   };

//   return (
//     <View>
//       <View>
//         <Text>{passPropsToTabs()}</Text>
//       </View>
//       <View>{renderTabContent()}</View>
//     </View>
//   );
// };

// export default Tabs;

// export const Tab = props => (
//   <View>
//     <TouchableOpacity onPress={props.index}>
//       <Text>{props.heading}</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({});
// ID: "5548d16e",
// KEY: "Yfc5aedfc674d5e06532b37848e8db324",
// URL: "https://api.edamam.com/search?",
