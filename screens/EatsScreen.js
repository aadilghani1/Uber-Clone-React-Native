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
    <SafeAreaView>
      <FlatList
        data={eatsData?.meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item: { idMeal, strMeal, strMealThumb }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 mb-2`}
          >
            <Image
              style={[
                tw`rounded-md`,
                {
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                },
              ]}
              source={{ uri: strMealThumb }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`font-semibold`}>{strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
