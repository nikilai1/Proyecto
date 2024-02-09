import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import{colors} from "../global/colors";

function Home({setCategorySelected}) {
  return (
    <View style={styles.container}>
      <Header title={"Inicio"}/>
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_600,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});