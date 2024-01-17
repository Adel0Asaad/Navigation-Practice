export class FilmGenre {
  name: string;
  selected: boolean;
  constructor(name: string, selected: boolean = false) {
    this.name = name;
    this.selected = selected;
  }
  select() {
    this.selected = true;
  }
  unselect() {
    this.selected = false;
  }
  toggle() {
    this.selected = !this.selected;
  }
}

export function getListOfGenres(genres: { id: number; name: string }[]) {
  let endList = new Map<number, FilmGenre>();
  genres.forEach((item) => {
    endList.set(item.id, new FilmGenre(item.name));
  });
  return endList;
}
export function spreadMapToArray(
  genreMap: Map<number, FilmGenre>
): { id: number; genre: FilmGenre }[] {
  return Array.from(genreMap.entries()).map(([id, filmGenre]) => ({
    id,
    genre: filmGenre,
  }));
}
