import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);

  useEffect(() => {
    setIsPortrait(height > width);
  }, [width, height]);

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ItemDetail", { id: product.id })}>
      <Card style={styles.card}>
        <Text style={isPortrait ? styles.textPortrait : styles.textLandscape}>{product.title}</Text>
        <Image style={styles.image} resizeMode="cover" source={{ uri: product.thumbnail }} />
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textPortrait: {
    width: "60%",
    fontSize: 16,
    fontFamily: "InterRegular",
  },
  textLandscape: {
    width: "40%",
    fontSize: 14,
    fontFamily: "InterRegular",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
});

export default ProductItem;
