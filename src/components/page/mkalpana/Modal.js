import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Modal from 'react-native-modal';
const AppModal = ({isOpen, onClose, label, children}) => {
  return (
    <Modal isVisible={isOpen}>
      <View>
        <TouchableOpacity>
          <Icon name="window-close" size={19} onPress={onClose} />
        </TouchableOpacity>
        {children}
      </View>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({});
