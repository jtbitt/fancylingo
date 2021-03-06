import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Subheading, Text } from "react-native-paper";

// import { ProductInfo } from "../interfaces/product.interface";
import { getDeckImage } from "../utils/getDeckImage";

interface IDefaultProductProps {
  product: any;
  onPress: () => void;
}

export const Product = ({ product, onPress }: IDefaultProductProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={getDeckImage(product.image_url)} />
      <View style={styles.content}>
        <Title style={styles.title}>{product.name}</Title>
        <Subheading style={styles.description}>
          {product.sales_description}
        </Subheading>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    borderRadius: 15,
    marginLeft: 35,
  },
  image: {
    height: 165,
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
