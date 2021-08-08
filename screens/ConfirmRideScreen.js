import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { selectCarInformation } from "../slices/navSlice";
import tw from "tailwind-react-native-classnames";
const ConfirmRideScreen = () => {
  const carInformation = useSelector(selectCarInformation);
  const value = useState(new Animated.ValueXY({ x: 0, y: 200 }))[0];
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(value, {
      toValue: { x: 150, y: 200 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Animated.View style={value.getLayout()}>
        <Image
          style={[
            {
              width: 100,
              height: 200,
              resizeMode: "contain",
            },
          ]}
          source={{
            uri: `${carInformation?.selectedCar?.image}`,
          }}
        />
        <Animated.View
          style={[
            {
              transform: [{ translateX: -40 }],
              height: 100,
              opacity,
            },
          ]}
        >
          <Text style={tw`text-lg font-semibold`}>Your ride is on the way</Text>
          <Text
            style={[tw`text-green-500`, { transform: [{ translateX: -3 }] }]}
          >{`Estimated travel time ${carInformation?.travelTime?.duration?.text}`}</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default ConfirmRideScreen;

const styles = StyleSheet.create({});
