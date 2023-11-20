import React, { useEffect } from "react";
import { LogBox, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Toast, { BaseToastProps } from "react-native-toast-message";
import SuccessToastWithIcon from "./SuccessToast";

LogBox.ignoreLogs(['ViewPropTypes']);

const HomeScreen = ({ route }: any) => {
    const { params } = route;
    const scannedData = params?.scannedData;

    useEffect(() => {
        if (scannedData) Toast.show({
            type: 'success',
            text1: 'Ada Kart QR Okutma İşlemi Başarılı',
            autoHide: false
        })
    }, [scannedData,params])

    const toastConfig = {
        success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
          <SuccessToastWithIcon
            {...props}
            style={{ borderLeftColor: '#6944FF' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 16,
              fontWeight: '500',
            }}
            text2Style={{
              fontSize: 16,
              fontWeight: '400',
            }}
          />
        ),
      };
      

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ position: 'absolute', top: -20, zIndex: 1, width: '100%' }}>
                <Toast config={toastConfig} />
            </View>
            {
                scannedData ? (
                <View style={{width: '100%', padding: 20}}>
                    <Text style={{fontSize: 18,fontWeight: '700',color: 'black'}}>Detaylar</Text>
                    <View style={{flexDirection: 'column',marginTop: 20}}>
                        <Text style={{fontSize: 14,color: 'black'}}>DATA</Text>
                        <Text style={styles.text}>{scannedData}</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: 'grey',marginTop: 20}}/>
                </View>
                ) : <Text style={styles.text}>Data is empty</Text>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#000',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15
    },
    modalText: {
        fontSize: 18,
        marginTop: 20,
        color: 'black'
    },
});

export default HomeScreen;
