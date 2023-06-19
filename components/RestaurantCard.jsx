import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ restaurant }) => {
  const navigation=useNavigation();
  
    return (
    <TouchableWithoutFeedback 
        onPress={()=>{navigation.navigate('Restaurant',{...restaurant})}}>
      <View className="mr-6 rounded-3xl bg-white shadow-lg">
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={restaurant.image}
        ></Image>
        <View className="px-3">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4 mr-2"
            />
            <Text className="text-xs py-2">
              <Text className="text-green-700">{restaurant.stars}</Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} review) .
                <Text className="font-semibold"> {restaurant.category}</Text>{" "}
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 py-2">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-xs text-gray-700">{restaurant.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
