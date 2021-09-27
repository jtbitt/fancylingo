import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Subheading, Text } from "react-native-paper";

import { ILesson } from "../interfaces/lesson.interface";

interface IDefaultProductProps {
  product: ILesson;
  productKey: number;
  length: number;
  onPress: () => void;
}

export const Product = ({
  product,
  productKey,
  length,
  onPress,
}: IDefaultProductProps) => {
  return (
    <View
      style={[
        styles.card,
        styles.shadow,
        { marginRight: productKey === length - 1 ? 35 : 0 },
      ]}
    >
      <Image style={styles.image} source={{ uri: product.image_url }} />
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
    backgroundColor: "#FFF6D7",
    marginBottom: 15,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    height: 165,
    width: "100%",
    borderRadius: 15,
  },
  content: {
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
