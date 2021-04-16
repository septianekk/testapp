import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker, TouchableOpacity} from 'react-native';
import SelectRn from '../../shared/Select';

const Home = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text style={styles.textTabs}>1</Text>
        <Text style={styles.textTabs}>2</Text>
        <Text style={styles.textTabs}>3</Text>
        <Text style={styles.textTabs}>4</Text>
        <Text style={styles.textTabs}>5</Text>
      </View>
      <View style={styles.qtext}>
        <Text>How many meals do you ( or want to have ) in a day?</Text>
      </View>
      <View>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 26,
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
  },
  textTabs: {
    width: 50,
    height: 40,
    // backgroundColor: 'green',
    textAlign: 'center',
    paddingTop: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  qtext: {
    marginTop: 50,
  },
  btn: {
    padding: 20,
    backgroundColor: '#009688',
  },
});
