import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Portal, Modal, Button, Title, Subheading } from "react-native-paper";

interface ILessonModalProps {
  visible: boolean;
  onDismiss: (exit: boolean) => void;
}

export const LessonModal = ({ visible, onDismiss }: ILessonModalProps) => {
  const alert = "../assets/alert.png";
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={styles.container}
        onDismiss={() => onDismiss(false)}
      >
        <View style={styles.content}>
          <Image
            style={{
              width: "100%",
              height: 250,
              resizeMode: "contain",
              marginRight: 25,
            }}
            source={require(alert)}
          />
          <Title style={[styles.title, styles.text]}>OH, STOP!</Title>
          <Subheading style={[styles.message, styles.text]}>
            Are you sure you want to close the lesson without finishing?
          </Subheading>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <Button
              style={[
                styles.button,
                {
                  backgroundColor: "rgba(255,255,255,0.48)",
                  borderColor: "white",
                  borderWidth: 1,
                  marginRight: 10,
                },
              ]}
              labelStyle={{ color: "white", fontSize: 13 }}
              mode="outlined"
              onPress={() => onDismiss(true)}
            >
              YES, CLOSE
            </Button>
            <Button
              style={[
                styles.button,
                {
                  backgroundColor: "white",
                  borderColor: "#A0149E",
                  borderWidth: 1,
                },
              ]}
              labelStyle={{ color: "#A0149E", fontSize: 13 }}
              mode="outlined"
              onPress={() => onDismiss(false)}
            >
              DO THE LESSON
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A0149E",
    marginHorizontal: "5%",
    borderRadius: 15,
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  message: {
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "white",
  },
  button: {
    paddingVertical: 12,
    width: "48%",
    borderRadius: 30,
    fontSize: 15,
  },
});
