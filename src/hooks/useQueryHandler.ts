import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useAuth } from "../contexts/Auth";

export const useQueryHandler = (query: any, variables = {}) => {
  const { uid } = useAuth();
  const { error, data, refetch } = useQuery(query, {
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
    throw new Error('Failed fetching data from the API');
  }

  return { queryData, refetch };
};