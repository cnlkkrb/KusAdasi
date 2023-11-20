import React from 'react';
import { Keyboard, View } from 'react-native';
import { QRIcon } from '../icon/qr-icon';

const QRTab = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setVisible(false));

    Keyboard.addListener('keyboardDidHide', () => setVisible(true));
  }, []);

  if (!visible) return null;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        top: -10,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#2b4584'
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <QRIcon />
      </View>
    </View>
  );
};

export default QRTab;
