import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ordersData from "../data/Orders.json";
import OrderItem from "../components/OrderItem";
import { FontAwesome } from '@expo/vector-icons';
import { colors } from "../global/colors";

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <OrderItem item={item} />
            <TouchableOpacity onPress={() => handleDeleteOrder(item.id)} style={styles.deleteButton}>
              <FontAwesome name="trash-o" size={20} color={colors.magenta_500} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(order) => order.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.turquoise_50, // Fondo turquesa claro
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.turquoise_200, // Borde turquesa claro
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: colors.turquoise_100, // Fondo turquesa más oscuro
  },
  deleteButton: {
    padding: 5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.turquoise_400, // Separador turquesa medio
    marginVertical: 5,
  },
});
