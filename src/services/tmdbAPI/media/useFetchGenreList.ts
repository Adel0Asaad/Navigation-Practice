import { useEffect, useState } from "react";
import { useApiFetching } from "../useApiFetch";
import { MediaGenre } from "../../../models/genres";

interface ApiResponse {
  genres: MediaGenre[];
}

export const useFetchGenreList = (
  dataUrl: string,
  initialState: MediaGenre[] | (() => MediaGenre[])
): [MediaGenre[], boolean] => {
  const { apiData, apiError, apiIsLoading, apiGet, apiPost } =
    useApiFetching<ApiResponse>();
  const [genres, setGenres] = useState<MediaGenre[]>(initialState);

  useEffect(() => {
    if (apiIsLoading) {
      return;
    }
    if (apiError) {
      console.error(apiError.message);
      return;
    }
    if (apiData) {
      setGenres(apiData.genres);
      return;
    }
  }, [apiData, apiError, apiIsLoading]);

  useEffect(() => {
    console.log(dataUrl);
    console.log("Should get genres here!");
    apiGet(dataUrl, {params: {}});
  }, []);

  return [genres, apiIsLoading];
};
