import React from 'react';
import Toast, { BaseToastProps } from 'react-native-toast-message';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckIcon } from '../icon/check-icon';

const SuccessToastWithIcon = (props: React.JSX.IntrinsicAttributes & BaseToastProps) => {
  const hideToast = () => {
    Toast.hide();
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#2b4584',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      activeOpacity={1}
      onPress={props.onPress}
    >
      <View style={{ alignItems: 'center', padding: 20,margin: 20 }}>
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
          <Text style={{ fontSize: 20, fontWeight: '500', color: '#fff',textAlign: 'center' }}>{props.text1}</Text>
          {props.text2 && <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>{props.text2}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SuccessToastWithIcon;
