import React from 'react';
import Toast, { BaseToastProps } from 'react-native-toast-message';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckIcon } from '../icon/check-icon';

const SuccessToastWithIcon = (props: React.JSX.IntrinsicAttributes & BaseToastProps) => {
  const hideToast = () => {
    Toast.hide();
  }
  return (
    <View
      style={styles.container}
    >
      <View style={{ alignItems: 'center', padding: 20,margin: 10 }}>
        <View style={{
            borderRadius: 25,
            backgroundColor: 'white',
            padding: 10
        }}>
            <CheckIcon />
        </View>
        <TouchableOpacity style={{
            position: 'absolute',
            right: 0
        }} onPress={hideToast}>
        <Text style={{color: 'white'}}>Kapat</Text>
      </TouchableOpacity>
        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>{props.text1}</Text>
          {props.text2 && <Text style={styles.text2}>{props.text2}</Text>}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b4584',
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    top: -20,
    zIndex: 999
  },
  text1: {
    fontSize: 20, 
    fontWeight: '500', 
    color: '#fff',
    textAlign: 'center'
  },
  text2: {
    fontSize: 16, 
    fontWeight: '400', 
    color: '#fff'
  },

});

export default SuccessToastWithIcon;
