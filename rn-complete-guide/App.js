import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalhandler = goalTitle => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const clearGoalsHandler = () => {
    setCourseGoals([]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalhandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
