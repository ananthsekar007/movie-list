export interface MovieDetails {
  title: string;
  summary: string;
  director: string;
  rating: number;
  imageUrl: string;
}

const imageUrl = "https://source.unsplash.com/random/200x200?sig=";

export const movies: MovieDetails[] = Array.from(
  { length: 15 },
  (_, index) => ({
    title: `The Godfather ${index + 1}`,
    summary: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. ${
      index + 1
    }`,
    director: `Francis Ford Coppola ${index + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    imageUrl: `${imageUrl}${index}`,
  })
);
