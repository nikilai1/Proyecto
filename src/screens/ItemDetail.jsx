import { StyleSheet, Text, View, Image, Pressable, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);
  const [buttonAnim] = useState(new Animated.Value(1));

  const { id } = route.params;
  const dispatch = useDispatch();

  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.descriptionTextPrice}>${product.price}</Text>
            <Pressable
              style={({ pressed }) => [
                styles.buy,
                { backgroundColor: pressed ? colors.turquoise_700 : colors.turquoise_500 },
              ]}
              onPress={onAddCart}
            >
              <Animated.View
                style={[
                  styles.buyContainer,
                  { transform: [{ scale: buttonAnim }] },
                ]}
              >
                <Text style={styles.buyText}>Add to cart</Text>
              </Animated.View>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  descriptionText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: "black",
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: "InterRegular",
    fontSize: 25,
    color: "black",
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.turquoise_100,
  },
  buyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buyText: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "white",
  },
});

