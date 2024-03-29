import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {colors} from "../global/colors"


const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_200,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Card;
