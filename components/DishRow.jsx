import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById } from "../slices/cartSlice";

const DishRow = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItemsById(state, item.id));
    console.log(cartItems);
  const handleIncrease = () => {
    dispatch(addToCart(item));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ width: 100, height: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            $ {item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
            onPress={handleDecrease}
              className="rounded-full p-1"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text className="mx-2">{cartItems.length}</Text>
            <TouchableOpacity
            onPress={handleIncrease}
              className="rounded-full p-1"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
