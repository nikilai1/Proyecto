import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import allProducts from '../data/products.json';
import {image} from "../data/products.json";


const ItemDetail = ({ productDetailId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = allProducts.find((product) => product.id === productDetailId);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [productDetailId]);

    return (
        
        <View style={styles.container}>
            
            {product ? (
                <>
                    <Text style={styles.title}>{product.title}</Text>
                    <Image style={styles.image} source={{ uri: product.images[0] }} />
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>Price: {product.price}</Text>
                </>
            ) : (
                <Text style={styles.loading}>Cargando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#E0E5EC',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
   
});

export default ItemDetail;
