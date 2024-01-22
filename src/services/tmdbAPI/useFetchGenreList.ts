import axios from "axios";
import { useEffect, useState } from "react";
import { MediaGenre } from "../../models/genres";
import { axiosClient } from "./apiHelper";

interface ApiResponse {
  genres: MediaGenre[]
}

export const useFetchGenreList = (
  dataUrl: string,
  initialState: MediaGenre[] | (() => MediaGenre[])
): [MediaGenre[], string | null, boolean] => {

  const [data, setData] = useState<MediaGenre[]>(initialState);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosClient.get<ApiResponse>(dataUrl, {cancelToken: source.token, params: {}});
        if (isMounted) {
          setData(response.data.genres);
          setFetchError(null);
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
      console.log("Cleaning up genres hook...")
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, []);

  return [data, fetchError, isLoading];
};
