import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ScannerQR() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(` ${data} `);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const hanldPressClose= ()=>{
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{padding:40}}>
          <View style={{display:'flex',flexDirection:"row",justifyContent:'space-between'}}> 
            <TouchableOpacity onPress={hanldPressClose}>
                <AntDesign name="closecircle" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo name="flashlight" size={32} color="white" />
            </TouchableOpacity>
          </View>
      </View>
      {scanned && 
      <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#ccc",
      flex:1,
  },
});

export default ScannerQR;