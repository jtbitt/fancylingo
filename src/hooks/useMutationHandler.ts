import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Alert } from "react-native";

import { useAuth } from "../contexts/Auth";

export const useMutationHandler = (mutation: any) => {
  const { uid } = useAuth();
  const [runMutation, { data, error }] = useMutation(mutation);
  const [mutationData, setMutationData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      setMutationData(data);
    }
  }, [data]);

  const setMutation = (variables: any) => {
    runMutation({
      variables: { uid: uid, ...variables },
    });
  }

  if (error) {
    throw new Error('Failed fetching data from the API');
  }

  return { mutationData, setMutation };
};