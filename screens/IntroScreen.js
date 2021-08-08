import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import tw from "tailwind-react-native-classnames";
const IntroScreen = () => {
  const navigation = useNavigation();
  const value = useState(new Animated.ValueXY({ x: 0, y: 300 }))[0];
  const opacity = useState(new Animated.Value(0))[0];
  useEffect(() => {
    Animated.timing(value, {
      toValue: { x: 150, y: 300 },
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
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Animated.View style={value.getLayout()}>
        <Image
          style={[
            {
              width: 100,
              height: 100,
              resizeMode: "contain",
            },
          ]}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <Animated.View
          style={[
            {
              transform: [{ translateX: -60 }],
              height: 100,
              opacity,
            },
          ]}
        >
          <Text>UBER Clone built with ❤ by Aadil</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
