import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useRef, useState } from "react";
import { axiosClient, mediaParams } from "./apiHelper";

interface MediaApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const useFetchMediaList = <S>(
  dataUrl: string,
  initialState: S[] | (() => S[])
): [
  S[],
  string | null,
  boolean,
  (page?: number, genreList?: number[], filterText?: string) => void
] => {
  const [options, setOptions] = useState<AxiosRequestConfig>({
    params: mediaParams,
  });

  const [data, setData] = useState<S[]>(initialState);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(true);
  const source = useRef(axios.CancelToken.source()); // useRef for persistent value across renders
  const [didInit, setDidInit] = useState(false)

  const loadData = (
    page?: number,
    genreList?: number[],
    filterText?: string
  ) => {
    setOptions((oldOptions) => {
      let newOptions = {...oldOptions}
      newOptions.params.page = page ?? oldOptions.params.page;

      // if filter text exists, empty out genres.
      // if not, put them back in.
      // filterText === ""
      //   ? (oldOptions.params.with_genres = "")
      //   : (oldOptions.params.with_genres =
      //       genreList?.toString() ?? oldOptions.params.with_genres);
      newOptions.params.with_genres = genreList?.toString() ?? oldOptions.params.with_genres;
      newOptions.params.query = filterText ?? oldOptions.params.query;

      return newOptions;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosClient.get<MediaApiResponse<S>>(dataUrl, options);
        if (isMounted) {
          console.log("Received data of: " + dataUrl)
          setData(response.data.results);
          setFetchError(null);
        }
      } catch (err: any) {
        // my first any in typescript sadly :(
        // console.log("Error in useFetchMediaList: " + err.message);
        if (isMounted) {
          setFetchError(err.message);
          setData(
            typeof initialState === "function"
              ? (initialState as () => S[])()
              : initialState
          ); // supposed to reset data
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if(didInit){
      fetchData()
    }else{
      setDidInit(true)
    }

    const cleanUp = () => {
      
      console.log("Clean up of: " + dataUrl);
      isMounted.current = false;
      source.current.cancel();
    };
    return cleanUp;
  }, [options]);

  return [data, fetchError, isLoading, loadData];
};
