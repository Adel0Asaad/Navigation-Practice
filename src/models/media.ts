export class Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  constructor(data: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }) {
    this.adult = data.adult;
    this.backdrop_path = data.backdrop_path;
    this.genre_ids = data.genre_ids;
    this.id = data.id;
    this.original_language = data.original_language;
    this.original_title = data.original_title;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.poster_path = data.poster_path;
    this.release_date = data.release_date;
    this.title = data.title;
    this.video = data.video;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }
}

export class Series {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;

  constructor(data: {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }) {
    this.backdrop_path = data.backdrop_path;
    this.first_air_date = data.first_air_date;
    this.genre_ids = data.genre_ids;
    this.id = data.id;
    this.name = data.name;
    this.origin_country = data.origin_country;
    this.original_language = data.original_language;
    this.original_name = data.original_name;
    this.overview = data.overview;
    this.popularity = data.popularity;
    this.poster_path = data.poster_path;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
  }
}
