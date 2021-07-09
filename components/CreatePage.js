import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import {BlurView} from 'expo-blur';
import {Dimensions} from 'react-native';
import * as Haptics from 'expo-haptics';


const {width} = Dimensions.get('window');


const CreatePage = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    // const [cardItems, setCardItems] = useState([]);


    //


    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        Alert.prompt(
            "Enter Companyname",
            "Please enter the Companyname",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: name => updateParams({type, data}, name)
                }
            ],
            "plain-text"
        );


        //
        // setCardItems([...cardItems, {
        //     id: 99,
        //     name: 'woho',
        //     barcode: {data}
        // }]);
    };

    const updateParams = ({type, data}, name) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        props.route.params.setCardItems([...props.route.params.cardItems, {
            id: props.route.params.cardItems.length,
            name: name,
            barcode: data,
            format: type
        }])
    }

    useEffect(() => {
        console.log(scanned)
    },[scanned])

    useEffect(() => {
        console.log(JSON.stringify(props.route.params.cardItems))
    },[props.route.params.cardItems])

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.container]}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
            <Text style={styles.description}>Scan your code</Text>
            <View style={styles.outline}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000000',
        padding: 8,
    },
    description: {
        fontSize: 30,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    outline: {
        width: 325,
        height: 175,
        borderColor: 'rgba(0,175,255,0.62)',
        borderWidth: 2,
        borderRadius: 15,
        alignSelf: 'center',
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default CreatePage;
