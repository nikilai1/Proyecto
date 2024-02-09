import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";
import {useState,useEffect} from"react";

const ProductItem = ({ product, setProductDetailId }) => {
const [isPrtrair, setItsPortrair] = useState (true);
const [isLandscape, setisLandscape] = useState (false);
  const { width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect (()=>
  {
    if (height>width){
      setItsPortrair (true);
      setisLandscape (false);
    } else {
      setItsPortrair (false);
      setisLandscape (true);
    }
  },{width,height})


  return (
    <>
      <Pressable onPress={() => setProductDetailId(product.id)}>
        <Card
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image style={styles.image} source={{ uri: product.images[0] }} />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: "70%",
  },
  textMin: {
    fontSize: 14,
    width: "70%",
  },
  image: {
    width: 70,
    height: 70,
  },
});