const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovie = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
}

const a = prompt('Какой последний фильм вы посмотрели?',''),
      b = prompt('Как бы ва его оценили?',''),
      c = prompt('Какой последний фильм вы посмотрели?',''),
      d = prompt('Как бы ва его оценили?','');

personalMovie.movies[a] = b;
personalMovie.movies[c] = d;

console.log( personalMovie.count );
console.log( personalMovie.movies.logan );
console.log( personalMovie.movies.lookAt );  