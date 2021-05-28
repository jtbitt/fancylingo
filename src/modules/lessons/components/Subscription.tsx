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
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Title style={styles.title}>Get premium today!</Title>
        <Subheading style={styles.description}>
          Access to all PRO features
        </Subheading>
        <Button
          style={styles.button}
          contentStyle={{ width: 150 }}
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
    marginTop: 20,
    borderRadius: 15,
  },
  image: {
    height: 70,
    width: "100%",
    borderRadius: 10,
  },
  content: {
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
    width: 217,
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
