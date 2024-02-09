import { useState } from "react";
import { View, StyleSheet,SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import ItemDetail from "./src/screens/ItemDetail";
import ItemListCategories from "./src/screens/ItemListCategories";
import { fonts } from "./src/global/fonts";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {productDetailId ? (
        <ItemDetail  productDetailId={productDetailId}/>
      ) : categorySelected ? (
        <ItemListCategories
          setCategorySelected={setCategorySelected}
          category={categorySelected}
          setProductDetailId={setProductDetailId}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##E0E5EC",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});