import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Select from 'react-select-native';
import {Picker} from '@react-native-picker/picker';
const SelectRn = props => {
  return (
    <View>
      {/* <Select
        defaultValue={props.value}
        onChange={props.handler}
        options={props.listObject.map(obj => ({
          label: obj.text,
          value: obj.val,
        }))}
      /> */}
      <Picker selectedValue={props.value} onValueChange={props.onSelectChange}>
        {props.options.map(option => (
          <Picker.Item label={option.text} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectRn;

const styles = StyleSheet.create({});
