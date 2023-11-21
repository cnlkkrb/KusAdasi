import React, { useEffect } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { PERMISSIONS, request } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    navigate(arg0: string, arg1: { screen: string; params: { scannedData: any; }; }): unknown;
    BottomTab: undefined;
    Anasayfa: { scannedData: any };
  };

const TransactionsScreen = () => {

    const navigation = useNavigation<RootStackParamList>();

    const onSuccess = (e: any) => {
        const scannedData = e.data;
        navigation.navigate('BottomTab', {
            screen: 'Anasayfa',
            params: { scannedData },
          } as { screen: string, params: { scannedData: any } });
        };

    useEffect(() => {
        const checkPermissions = async () => {
            const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
            console.log(cameraPermission)
        };

        checkPermissions();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <QRCodeScanner
                onRead={onSuccess}
                cameraStyle={styles.cameraContainer}
                //flashMode={RNCamera.Constants.FlashMode.torch}
                topContent={<Text style={styles.centerText}>QR kodunu okutunuz</Text>}
                containerStyle={{ alignItems: 'center' }}
                cameraContainerStyle={{ borderRadius: 20 }}
                showMarker
                reactivate={true}
                reactivateTimeout={1000}
                markerStyle={styles.marker}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraContainer: {
        width: Dimensions.get('window').width,
        height: '100%',
    },
    centerText: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    marker: {
        color: 'red',
        borderColor: 'white',
        borderRadius: 10,
        width: 250,
        height: 250
    }
});

export default TransactionsScreen;