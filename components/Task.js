import React from "react";
import { Text, View } from "react-native";

function Task({ text }) {
  return (
    <View className="bg-white p-4 rounded-lg flex-row items-center justify-between mb-5">
      <View className="flex-row items-center flex-wrap">
        <View className="w-6 h-6 bg-[#55bcf6] opacity-40 rounded-md mr-4"></View>
        <Text className="max-w-[90%]">{text}</Text>
      </View>
      <View className="w-3 h-3 border-[#55bcf6] border-2 rounded-md"></View>
    </View>
  );
}

export default Task;
