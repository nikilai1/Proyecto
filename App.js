import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import ItemDetail from "./src/screens/ItemDetail";
import ItemListCategories from "./src/screens/ItemListCategories";
import { fonts } from "./src/global/fonts";
import { StatusBar } from "expo-status-bar";
import Navigator from "./src/navigation/Navigator";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  
const [categorySelected, setCategorySelected] = useState("");
  
  const [productDetailId, setProductDetailId] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator/>

}
