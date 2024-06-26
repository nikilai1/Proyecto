import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Buscar producto..."
          placeholderTextColor={colors.magenta_700}
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color={colors.turquoise_700} />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color={colors.turquoise_700} />
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: '100%',
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
    color: colors.magenta_700,
    borderColor: colors.turquoise_700,
  },
});
