import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { useAuth } from "../contexts/Auth";

export const useMutationHandler = (mutation: any) => {
  const { uid } = useAuth();
  const [runMutation, { data, loading, error }] = useMutation(mutation);
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
    console.log('error');
  }

  if (loading) {
    console.log('loading');
  }

  return { mutationData, setMutation };
};