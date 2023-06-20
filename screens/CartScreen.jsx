import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant=featured.restaurants[0]

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
            Papa Jones
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
        paddingBottom:50
      }}
      className="bg-white pt-5">
        {restaurant.dishes.map((dish,index)=>{
            return (
                <View key={index} 
                className="flex-row items-center space-x-5 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg">
                    <Text className="font-bold" style={{color:themeColors.text}}>2 x</Text>
                    <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                    <Text className="flex-1 text-gray-700">{dish.name}</Text>
                    <Text className="font-semibold">${dish.price}</Text>
                    <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                        <Icon.Minus stroke={"white"} width={20} height={20} strokeWidth={2}/> 
                    </TouchableOpacity>
                </View>
            )
        })}
      </ScrollView>
      {/* summary  */}

      <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-top space-y-2">
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">$4</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">$24</Text>
        </View>
        <View>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("OrderGettingReady")}}
            style={{backgroundColor:themeColors.bgColor(1)}}
            className="p-3 rounded-full"> 
                <Text className="text-white text-center font-bold text-lg">Place order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
