import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <Pressable
      style={[
        styles.card,
        isPortrait ? styles.cardPortrait : styles.cardLandscape,
      ]}
      onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
    >
      <Card style={styles.cardContent}>
        <Text style={isPortrait ? styles.textPortrait : styles.textLandscape}>
          {product.title}
        </Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  cardPortrait: {
    flexDirection: "column",
  },
  cardLandscape: {
    flexDirection: "row",
  },
  textPortrait: {
    width: "100%",
    fontSize: 16,
    fontFamily: "InterRegular",
    marginBottom: 10,
  },
  textLandscape: {
    width: "70%",
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
