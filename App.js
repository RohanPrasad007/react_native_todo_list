import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  };
  return (
    <View className="flex-1 bg-[#E8EAED]">
      <StatusBar style="auto" />
      <View className="pt-10 px-5">
        <Text className="text-2xl font-bold">Today's tasks</Text>
        <View className="mt-7">
          {tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="absolute bottom-8 w-full flex-row justify-around items-center">
        <TextInput
          placeholder="Write a task"
          className="py-2 px-4 bg-white rounded-3xl border-[#c0c0c0] border w-64"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View className="w-14 h-14 bg-white rounded-full items-center justify-center ml-3">
            <Text className="text-2xl">+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
