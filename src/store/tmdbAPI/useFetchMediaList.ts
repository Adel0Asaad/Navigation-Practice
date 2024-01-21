import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useRef, useState } from "react";
import { baseUrl } from "../../backend/constants";

interface MediaApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const useFetchMediaList = <S>(
  dataUrl: string,
  options: AxiosRequestConfig,
  initialState: S[] | (() => S[])
): [
  S[],
  string | null,
  boolean,
  (page: number) => void,
  (genreList: number[]) => void,
  (filterText: string) => void
] => {
  options.baseURL = baseUrl;

  const [filterText, setFilterText] = useState<string>("")
  const [data, setData] = useState<S[]>(initialState);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(true);
  const source = useRef(axios.CancelToken.source()); // useRef for persistent value across renders

  const fetchData = (page: number = 1) => {
    // console.log("Checking filter text: " + filterText)
    if(filterText === ""){
      fetchDataDiscover(page)
    } else{
      fetchDataSearch(page)
    }
  }

  const fetchDataDiscover = async (page: number = 1) => {
    setIsLoading(true);
    try {
      options.cancelToken = source.current.token;
      options.params.page = page;
      const response = await axios.get<MediaApiResponse<S>>(dataUrl, options);
      if (isMounted) {
        // if(dataUrl === "/discover/movie"){
        //   console.log("From Hook: ")
        //   console.log(response.data.results)
        // }
        setData(response.data.results);
        setFetchError(null);
      }
    } catch (err: any) {
      // my first any in typescript sadly :(
      console.log(err.message);
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

  const fetchDataSearch = async (page: number = 1) => {
    setIsLoading(true);
    try {
      options.cancelToken = source.current.token;
      options.params.page = page;
      options.params.query = filterText
      let searchUrl = dataUrl === "/discover/movie" ? "/search/movie" : "/search/tv"
      // console.log("Searching with URL [" + searchUrl + "] data: [" + filterText + "]")
      const response = await axios.get<MediaApiResponse<S>>(searchUrl, options);
      if (isMounted) {
        // if(dataUrl === "/discover/movie"){
        //   console.log("From Hook: ")
        //   console.log(response.data.results)
        // }
        setData(response.data.results);
        setFetchError(null);
      }
    } catch (err: any) {
      // my first any in typescript sadly :(
      console.log(err.message);
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

  // useEffect(() => {
  //   fetchData()
  // }, [filterText])

  useEffect(() => {
    // fetchData()

    const cleanUp = () => {
      console.log("Clean up.")
      isMounted.current = false;
      source.current.cancel();
    };
    return cleanUp;
  }, [options]);

  const fetchPage = (page: number) => {
    fetchData(page);
  };

  const setFilterGenres = (genreList: number[]) => {
    options.params.with_genres = genreList.toString();
  };

  return [data, fetchError, isLoading, fetchPage, setFilterGenres, setFilterText];
};
