export interface MediaGenre {
  id: number
  name: string;
}

// export function getListOfGenres(genres: { id: number; name: string }[]) {
//   let endList = new Map<number, FilmGenre>();
//   genres.forEach((item) => {
//     endList.set(item.id, new MediaType(item.name));
//   });
//   return endList;
// }
// export function spreadMapToArray(
//   genreMap: Map<number, FilmGenre>
// ): { id: number; genre: FilmGenre }[] {
//   return Array.from(genreMap.entries()).map(([id, filmGenre]) => ({
//     id,
//     genre: filmGenre,
//   }));
// }
