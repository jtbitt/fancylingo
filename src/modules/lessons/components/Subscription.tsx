import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Title, Subheading, Button } from "react-native-paper";

interface IDefaultSubscriptionProps {
  // style?: any;
  // size: number;
  onPress: () => void;
}

export const Subscription = ({ onPress }: IDefaultSubscriptionProps) => {
  const image = require("../assets/premium-subscription.png");

  return (
    <View style={[styles.card, styles.shadow]}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Title style={styles.title}>Get premium today!</Title>
        <Subheading style={styles.description}>
          Access to all PRO features
        </Subheading>
        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => console.log("subscribe")}
        >
          GET PRO FOR $13.99/M
        </Button>
        <Text style={styles.actionText}>Start your 7 days free trial</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    borderRadius: 15,
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
    height: 70,
    width: "100%",
    borderRadius: 10,
  },
  content: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: "center",
  },
  buttonText: {
    width: 217,
    color: "white",
    fontSize: 18,
  },
  actionText: {
    color: "#fc5a5e",
    fontWeight: "bold",
  },
});
