import { useEffect, useState } from "react";
import { mediaParams } from "../apiHelper";
import { useApiFetching } from "../useApiFetch";
import { Movie, Series } from "../../../models/media";
import { AxiosRequestConfig } from "axios";

interface MediaApiResponse<T extends Movie | Series> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export const useFetchMediaList = <S extends Movie | Series>(
  dataUrl: string,
  initialState: S[] | (() => S[])
): [
  S[],
  boolean,
  (page?: number, genreList?: number[], filterText?: string) => void
] => {
  const { apiData, apiError, apiIsLoading, apiGet, apiPost } =
    useApiFetching<MediaApiResponse<S>>();
  const [media, setMedia] = useState<S[]>(initialState);
  const [options, setOptions] = useState<AxiosRequestConfig<any>>({
    params: mediaParams,
  });

  useEffect(() => {
    if (apiIsLoading) {
      return;
    }
    if (apiError) {
      console.log(apiError);
      return;
    }
    if (apiData) {
      setMedia(apiData.results);
      return;
    }
    
  }, [apiData, apiError, apiIsLoading]);

  const loadData = (
    page?: number,
    genreList?: number[],
    filterText?: string
  ) => {
    setOptions((oldOptions) => {
      let newOptions = { ...oldOptions };
      newOptions.params.page = page ?? oldOptions.params.page;
      newOptions.params.with_genres =
        genreList?.toString() ?? oldOptions.params.with_genres;
      newOptions.params.query = filterText ?? oldOptions.params.query;
      return newOptions;
    });
  };

  useEffect(() => {
    apiGet(dataUrl, options)
  }, [options])

  return [media, apiIsLoading, loadData];
};
