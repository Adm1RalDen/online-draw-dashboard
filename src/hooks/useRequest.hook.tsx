import { AxiosResponse } from "axios";
import { useState } from "react";

export const useRequest = (request: () => any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const makeRequest = async () => {
    try {
      setIsLoading(true);
      const res: AxiosResponse = await request();
      setData(res.data);
    } catch (e) {
      setError(JSON.stringify(e));
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error, data, makeRequest };
};
