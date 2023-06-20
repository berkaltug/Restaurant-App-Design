import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";

const CartIcon = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cart");
        }}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center rounded-full mx-5 px-4 py-2 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 font-extrabold text-center text-white text-lg">
          View Cart
        </Text>
        <Text className="-1 font-extrabold  text-white text-lg">${15}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
