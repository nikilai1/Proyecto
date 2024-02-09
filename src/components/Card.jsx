import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E5EC", 
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});
export default Card;
