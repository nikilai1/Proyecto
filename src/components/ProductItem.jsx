import React from "react";
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({ product, navigation }) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 350;

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
    >
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: product.thumbnail }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { fontSize: isSmallScreen ? 16 : 20 }]}>
            {product.title}
          </Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    paddingTop:30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  card: {
 
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blue_100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
  
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "black",
    marginBottom: 5,
  },
  price: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: colors.blue_700,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  textContainer: {
    
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default ProductItem;
