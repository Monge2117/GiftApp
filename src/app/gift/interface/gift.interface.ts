export interface Rickandmorty {
  info:    Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Result {
  id:       number;
  name:     string;
  species:  Species;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
  Unknown = "unknown",
}
