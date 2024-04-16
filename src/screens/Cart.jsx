import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { removeItem } from "../features/shop/cartSlice";
import { FontAwesome } from "@expo/vector-icons";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: "loggedUser" });
  };

  const handleDeleteItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <CartItem item={item} />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteItem(item.id)}
                >
                  <FontAwesome name="trash-o" size={20} color={colors.magenta_500} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <TouchableOpacity style={styles.button} onPress={confirmCart}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyMessage}>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.turquoise_50,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
    color: colors.turquoise_700,
  },
  button: {
    backgroundColor: colors.turquoise_500,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    color: colors.turquoise_700,
  },
  deleteButton: {
    padding: 5,
  },
});
