import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../backend/constants";
import { MediaGenre } from "../../backend/Classes/genres";

interface ApiResponse {
  genres: MediaGenre[]
}

export const useFetchGenreList = (
  dataUrl: string,
  options: AxiosRequestConfig,
  initialState: MediaGenre[] | (() => MediaGenre[])
): [MediaGenre[], string | null, boolean] => {
  options.baseURL = baseUrl;

  const [data, setData] = useState<MediaGenre[]>(initialState);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        options.cancelToken = source.token;
        const response = await axios.get<ApiResponse>(dataUrl, options);
        if (isMounted) {
          setData(response.data.genres);
          setFetchError("null");
        }
      } catch (err: any) {
        // my first any in typescript sadly :(
        if (isMounted) {
          setFetchError(err.message);
          setData(
            typeof initialState === "function"
              ? (initialState as () => MediaGenre[])()
              : initialState
          ); // supposed to reset data
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [options]);

  return [data, fetchError, isLoading];
};
