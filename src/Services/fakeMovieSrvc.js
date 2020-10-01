const movies = [{
  "_id": "b5673cb2-56a2-4c3e-a0f3-c3c4e0c2c878",
  "title": "Princess (Prinsessa)",
  "genre": "Drama",
  "rent": "$8.01",
  "stock": 1
}, {
  "_id": "f9cec7d8-4bee-4ce0-927c-50174ab65c45",
  "title": "Story of Us, The",
  "genre": "Comedy|Drama",
  "rent": "$2.41",
  "stock": 10
}, {
  "_id": "dcb9867d-6019-426e-9aae-33b8d5b286af",
  "title": "Fearless Hyena, The (Xiao quan guai zhao)",
  "genre": "Action|Comedy",
  "rent": "$8.73",
  "stock": 3
}, {
  "_id": "1a8ad9cd-c2f1-45fc-80e5-67c8418a587c",
  "title": "Avenging Conscience, The",
  "genre": "Drama|Horror",
  "rent": "$5.12",
  "stock": 2
}, {
  "_id": "c9e916b5-ffd8-401e-8f6c-51b93d3a43c8",
  "title": "Point Break",
  "genre": "Action|Crime|Thriller",
  "rent": "$5.96",
  "stock": 9
}, {
  "_id": "2b869d38-3a79-474b-b15b-bc8a45b29750",
  "title": "High Heels (Tacones lejanos)",
  "genre": "Comedy|Drama",
  "rent": "$6.27",
  "stock": 7
}];

export function getMovies(){
  return movies;
}

export function getMovie(id){
  return movies.find(m => m._id === id);
}