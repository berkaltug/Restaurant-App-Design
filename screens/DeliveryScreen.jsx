import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { featured } from "../constants";
import * as Icon from "react-native-feather";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        ></Marker>
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-5">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-2xl text-gray-700 font-bold">
              20-30 Minutes
            </Text>
            <Text className="text-lg text-gray-700 font-semibold">
              Your order is on the way!
            </Text>
          </View>
          <Image
            className=" h-20 w-20"
            source={require("../assets/images/bikeGuy2.gif")}
          ></Image>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.7) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <Image
              source={require("../assets/images/berk.png")}
              className="h-10 w-10 rounded-full"
            ></Image>
          </View>
          <View className="flex-1 ml-4">
            <Text className="text-lg font-bold text-white">Berk A.</Text>
            <Text className="text-white text-md">Delivery Guy</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="rounded-full p-2 bg-white">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              className="rounded-full p-2 bg-white"
            >
              <Icon.X stroke={"red"} strokeWidth={1} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
