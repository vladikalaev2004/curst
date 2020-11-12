// ЦИКЛЫ

let num = 50;

// while ( num <= 55 ) {
//     console.log( num );
//     num++;
// }

// do {
//     console.log( num );
//     num++;
// }while( num < 55 );


// for (let i = 0; i < 10 ; i++ ) {
//     if( i === 6 ) {
//         continue;
//     } 
//     console.log(i)
// }
// УСЛОВИЕ
// const num = 50;

// switch( num ) {
//     case 49:
//     console.log('Неверно');
//     break;
//     case 100:
//     console.log('Неверно');
//     break;
//     case 51:
//     console.log('В самую точку')
//     break;  
//     } 


// СОЗДАЁМ ПРИЛОЖЕНИЕ
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovie = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
}
let i = 0;

while( i < 2 ) {
    const a = prompt('Какой последний фильм вы посмотрели?','');
          b = prompt('Как бы ва его оценили?','');
          if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovie.movies[a] = b;
            console.log('Done');
            i++
          }else {
            console.log("Error");
            i--;
          }
}


// do {
//     const a = prompt('Какой последний фильм вы посмотрели?','');
//           b = prompt('Как бы ва его оценили?','');
//           if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovie.movies[a] = b;
//             console.log('Done');
//             i++
//           }else {
//             console.log("Error");
//             i--;
//           }
// }while( i < 2 )


// for( let i = 0; i < 2; i++ ) {
//     const a = prompt('Какой последний фильм вы посмотрели?','');
//           b = prompt('Как бы ва его оценили?','');
//           if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovie.movies[a] = b;
//             console.log('Done');
//           }else {
//             console.log("Error");
//             i--;
//           }
          
// }


if( personalMovie.count < 10 ) {
    alert('Просмотрено довольно мало фильмов')
}else if( personalMovie.count >= 10 && personalMovie.count <= 30 ) {
    alert('Вы классический зритель');
}else if( personalMovie.count > 30 ) {
    console.log('Вы киноман');
}
else {
    alert('Произошла ошибка');
}

console.log( personalMovie );
