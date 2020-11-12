"use strict"
// Методы строк и чисел
// const str = 'test';
// const arr = [1,2,3];
// console.log( str.substr(0, 4))
// console.log( str[2] );

// ФУНКЦИИ
// function showFirstMessage(text) {
//     let num = 20;
//     return text;
// }

// let another = showFirstMessage('Hello World!');
// console.log( another );

// const logger = function() {
//     console.log('Hello!');
// }

// logger();

// const calc = ( a, b ) => {
//     console.log('1');
//     return a + b
// };
// ЦИКЛЫ

// let num = 50;

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

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
    while ( numberOfFilms == '' || numberOfFilms === null || isNaN( numberOfFilms )) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

// start();

const personalMovie = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
}




function rememberMyFilms() {
    
    for( let i = 0; i < 2; i++ ) {
        const a = prompt('Какой последний фильм вы посмотрели?',''),
              b = prompt('Как бы ва его оценили?','');
              if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovie.movies[a] = b;
                console.log('Done');
              }else {
                console.log("Error");
                i--;
              }
              
    }

}
// rememberMyFilms();

 function detectPersonalLevel() {

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

 }

// detectPersonalLevel();

function showMyDB( hidden ) {

    if( !hidden ) {
        console.log( personalMovie );
    }
}

showMyDB( personalMovie.privat );


function writeYourGenres() {
    for( let i = 1; i <= 3; i++ ) {
        const index = prompt(`Ваш любимый жанр под номером ${i} ?`,'');
        // if( isNaN( index ) || index === null || index === '' ) {
        //     i--;
        //     break;
        // };
        personalMovie.genres[ i ] = index;
        }
}

writeYourGenres();

console.log( personalMovie.genres );
// let i = 0;

// while( i < 2 ) {
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
// }


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






