import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Title } from "react-native-paper";

import { Product } from "../components/Product";
import { products } from "../interfaces/product.interface";

export const Store = () => {
  return (
    <View style={styles.container}>
      <Title>Go farther with your Spanish</Title>
      <ScrollView horizontal={true}>
        {products.map((product, i) => (
          <Product
            product={product}
            key={i}
            onPress={() => console.log("cool")}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
