import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ActivityIndicator, Colors, Text} from "react-native-paper";

import { useAuth } from "../contexts/Auth";

export const useQueryHandler = (query: any, variables: any = {}) => {
  const { uid } = useAuth();
  const { loading, error, data } = useQuery(query, {
    variables: { uid: uid, ...variables },
  });
  const [queryData, setQueryData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const cleanData: any = Object.values(data)[0];
      setQueryData(cleanData);
    }
  }, [data]);

  if (error) {
    console.log('error');
  }

  return { queryData };
};