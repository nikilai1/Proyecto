import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ordersData from "../data/orders.json";
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
              <FontAwesome name="trash-o" size={20} color={colors.blue_500} />
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
});
