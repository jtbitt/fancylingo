import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Subheading, Text } from "react-native-paper";

import { ProductInfo } from "../interfaces/product.interface";
import { getProductImage } from "../utils/getProductImage";

interface IDefaultProductProps {
  product: ProductInfo;
  onPress: () => void;
}

export const Product = ({ product, onPress }: IDefaultProductProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={getProductImage(product.image)} />
      <View style={styles.content}>
        <Title style={styles.title}>{product.name}</Title>
        <Subheading style={styles.description}>
          {product.description}
        </Subheading>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    borderRadius: 15,
    marginLeft: 35,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 15,
  },
  content: {
    backgroundColor: "rgba(255,255,255,0.48)",
    alignItems: "center",
    justifyContent: "center",
    height: 125,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
  },
  price: {
    fontSize: 32,
    fontWeight: "500",
  },
});
