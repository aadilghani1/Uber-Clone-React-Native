import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
const EatsScreen = () => {
  const [eatsData, setEatsData] = useState(null);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((res) => res.json())
      .then((data) => setEatsData(data));
  }, []);
  return (
    <SafeAreaView style={tw`flex items-center`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo.png",
        }}
      />
      <FlatList
        style={tw`w-full`}
        data={eatsData?.meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item: { idMeal, strMeal, strMealThumb }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 mb-2`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{ uri: strMealThumb }}
            />

            <View style={tw`-ml-6 flex items-end`}>
              <Text style={tw`font-semibold`}>{strMeal}</Text>
              <Text style={tw`text-xs text-gray-400 `}>Indian</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
