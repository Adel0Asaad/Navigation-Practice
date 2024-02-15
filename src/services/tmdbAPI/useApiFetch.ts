import { AxiosError, AxiosRequestConfig } from "axios";
import { useState } from "react";
import { axiosClient } from "./apiHelper";

interface ApiResponse<T> {
  apiData: T | null;
  apiError: AxiosError<any> | null;
  apiIsLoading: boolean;
}


export const useApiFetching = <T>() => {

  const [response, setResponse] = useState<ApiResponse<T>>({
    apiData: null,
    apiError: null,
    apiIsLoading: false,
  });

  const apiGet = async (url: string, config: AxiosRequestConfig<any>) => {
    if(response.apiIsLoading){
      return
    }
    setResponse({ ...response, apiIsLoading: true });
    try {
      const res = await axiosClient.get<T>(url, config);
      setResponse({ apiData: res.data, apiError: null, apiIsLoading: false });
    } catch (error: any) {
      setResponse({ apiData: null, apiError: error, apiIsLoading: false });
    }
  };

  const apiPost = async (url: string, data: T, config: AxiosRequestConfig<any>) => {
    setResponse({ ...response, apiIsLoading: true });
    try {
      const res = await axiosClient.post<T>(url, data, config);
      setResponse({ apiData: res.data, apiError: null, apiIsLoading: false });
    } catch (error: any) {
      setResponse({ apiData: null, apiError: error, apiIsLoading: false });
    }
  };

  return { ...response, apiGet, apiPost };
};
