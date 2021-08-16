import { useState } from "react";
import { useQuery } from "@apollo/client";

import { useAuth } from "../../../contexts/Auth";

export const useQueryHandler = (query: any) => {
  const { uid } = useAuth();
  const { loading, error, data } = useQuery(query, {
    variables: { uid: uid },
  });

  if (error) {
    console.log('error');
  }

  if (loading) {
    console.log('loading');
  }

  return { data };
};