import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useMemo, useState } from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee=3
  useMemo(() => {
    const gItems = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    console.log("grouped items",gItems);
    setGroupedItems(gItems);
  },[cartItems]);

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Cart</Text>
          <Text className="text-center font-bold text-grey-500">
            {restaurant.title}
          </Text>
        </View>
      </View>
      {/* delivery info */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row xp-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* Foods  */}
      <ScrollView
        showsVerticalScrollIndicator={"false"}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key,items]) => {
          return (
            <View
              key={key}
              className="flex-row items-center space-x-5 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length}
              </Text>
              <Image className="h-14 w-14 rounded-full" source={items[0]?.image} />
              <Text className="flex-1 text-gray-700">{items[0]?.name}</Text>
              <Text className="font-semibold">${items[0]?.price}</Text>
              <TouchableOpacity
              onPress={()=>{dispatch(removeFromCart(items[0]))}}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  stroke={"white"}
                  width={20}
                  height={20}
                  strokeWidth={2}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* summary  */}

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-top space-y-2"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${cartTotal + deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OrderGettingReady");
            }}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
