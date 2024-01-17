// export class Movie {

    // adult: boolean
    // backdrop_path: string
    // genre_ids: number[]
    // id: number
    // original_language: string
    // original_title: string
    // overview:string
    // popularity: number // float/double
    // poster_path: string
    // release_date: string
    // title: string
    // video: boolean
    // vote_average: number // float from 0 to 10
    // vote_count: number

    // constructor(){

    // }

//     select() {
//       this.selected = true;
//     }
//     unselect() {
//       this.selected = false;
//     }
//     toggle() {
//       this.selected = !this.selected;
//     }
//   }
  
//   export function getListOfGenres(genres: { id: number; name: string }[]) {
//     let endList = new Map<number, FilmGenre>();
//     genres.forEach((item) => {
//       endList.set(item.id, new FilmGenre(item.name));
//     });
//     return endList;
//   }
//   export function spreadMapToArray(
//     genreMap: Map<number, FilmGenre>
//   ): { id: number; genre: FilmGenre }[] {
//     return Array.from(genreMap.entries()).map(([id, filmGenre]) => ({
//       id,
//       genre: filmGenre,
//     }));
//   }
  