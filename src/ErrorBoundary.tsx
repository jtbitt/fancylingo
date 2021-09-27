import React, { Component, ReactNode, ErrorInfo } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Text, Button } from "react-native-paper";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  private handleRefreshClick = () => {
    this.setState({ hasError: false });
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error: ", error, errorInfo);
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <View style={styles.container}>
          <Title>Oops...</Title>
          <Text style={styles.text}>
            Something went wrong on our end, try refreshing below...
          </Text>
          <Button
            style={styles.button}
            labelStyle={{ color: "white" }}
            mode="contained"
            onPress={this.handleRefreshClick}
          >
            Refresh
          </Button>
        </View>
      );
    }

    return children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: "15%",
  },
  text: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
});
