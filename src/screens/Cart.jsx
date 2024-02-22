import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../global/colors";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem) => acc + currentItem.quantity * currentItem.price, 0);
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    const newTotal = updatedCartItems.reduce((acc, currentItem) => acc + currentItem.quantity * currentItem.price, 0);
    setTotal(newTotal);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <CartItem item={item} />
            <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={styles.deleteButton}>
              <FontAwesome name="trash-o" size={20} color={colors.blue_500} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(cartItem) => cartItem.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_50,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.blue_200,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.blue_100,
  },
  deleteButton: {
    padding: 5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.blue_400,
    marginVertical: 5,
  },
  totalText: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.blue_900,
  },
});
