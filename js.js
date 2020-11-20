"use strict"
// ООП и протатипное програмирование

// const soldier = {
//     health:400,
//     armor:100,
// }
// const john = {
//     health:100,
    
// }
// Object.setPrototypeOf( john, soldier );

// console.log( john );

// const xuy = Object.create( soldier );

// console.log( xuy.health );


// Передача данных по ссылке или по значению, оператор Spread
// const obj = {
//     one:1
// };
// const newObj = obj;
// newObj.one = 3;
// console.log( obj );
// console.log( newObj );

// const obj = {
//     one:1,
//     two:2,
//     x: {
//         num1:13,
//         num2:32,
//     }
// }

// function clone( obj ) {
//     const newObj = {};

//     for( let key in obj ) {
//        newObj[key] = obj[key];
//     }

//     return newObj;
// }

// const cloneReady = clone( obj );
// cloneReady.one = 10;
// cloneReady.x.num1 = 3;
// console.log( cloneReady );
// console.log( obj );

// const obj = {
//     name:'John',
//     age:30,
// }

// const object = {
//     name:'Паша',
//     age:17,
// }

// const peopleCars = {
//     model:'BMW',
// }

// const newObj = Object.assign( object , peopleCars );

// console.log( newObj );

// const arr = [1,2,3,4,5];

// const array = arr.slice();

// console.log( array );

// const arr = [1,2,3,4];

// const array = [...arr];

// console.log(...arr);

// const arr = ['John','Suraev'];

// function pasport( name, surname ) {
//      return `имя:${name};фамилия:${surname}`;
// }
// console.log( pasport(...arr ));


// const obj = {
//     a:5,
//     b:10,
// }

// const object = {...obj};

// object.a = 114;

// console.log( obj );
// console.log( object );

// Массивы

// const arr = [1, 2, 3, 6, 8 ];

// const str = prompt('','');
// const products = str.split(', ');
// products.sort( sorted );

// function sorted( a, b ) {
//     return a - b;
// }

// console.log("products", products.join(','));



// arr.forEach( ( item,i , array ) => {
//     console.log(`${i}:${item} внутри массива ${array}`);
// })

// arr[99] = 0;
// console.log( arr.length );
// console.log( arr );

// console.log( arr.length );

// arr.pop();

// arr.push(10);

// console.log( arr );

// for( let i = 0; i < arr.length; i++ ) {
//     console.log( arr[i] );
// }

// for( let value of arr ) {
//     console.log( value );
// }

// Объекты и деструктурицзация
// const object = {
//     name:"test",
//     width:1024,
//     height:1024,
//     colors:{
//         border:'black',
//         bg:'red',
//     }
// }

// function iteratorObj() {
//     for( let key in object ) {
//         if( typeof object[key] == 'object') {
//             for( let i in object[key] ) {
//                 console.log(`Свойство ${i} имеет значение ${object[key][i]}`)
//             }
//         }else {

//             console.log(`Свойство ${key} имеет значение ${object[key]} `);
                        
//         }
//     }
// }

// const { border, bg } = object.colors;
// console.log("bg", bg)
// console.log("border", border)



// iteratorObj();

// Функции колбэки
// function xuyna( text, callback ) {
//     console.log( 1 );
//     callback();
// }

// function callback() {
//     console.log( 2 );
// }

// xuyna('Привет', callback );


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




// start();

const personalMovie = {
    start() {
        this.count  = +prompt('Сколько фильмов вы уже посмотрели?');
        
        while ( this.count == '' || this.count === null || isNaN( this.count )) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
        
    },
    rememberMyFilms() {
    
        for( let i = 0; i < 2; i++ ) {
            const a = prompt('Какой последний фильм вы посмотрели?',''),
                  b = prompt('Как бы ва его оценили?','');
                  if( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                    this.movies[a] = b;
                    console.log('Done');
                  }else {
                    console.log("Error");
                    i--;
                  }
                  
        }
    
    },
    detectPersonalLevel() {

        if( this.count < 10 ) {
            alert('Просмотрено довольно мало фильмов')
        }else if( this.count >= 10 && this.count <= 30 ) {
            alert('Вы классический зритель');
        }else if( this.count > 30 ) {
            console.log('Вы киноман');
        }
        else {
            alert('Произошла ошибка');
        }

    },
    showMyDB( hidden ) {

        if( !this.hidden ) {
            console.log( this );
        }
    },
    toggleVisibleMyDB() {
       if( !this.privat ) this.privat = true;
       else this.privat = false;
    },
    writeYourGenres() {
        // 1 вариант
        // for( let i = 0; i < 3; i++ ) {
        //     const index = prompt(`Ваш любимый жанр под номером ${i} ?`,'');
        //     if( index == '' || index == null ) {
        //         i--;
        //         break;
        //     };
        //     this.genres[ i ] = index;
           
        //     }
        // 2 вариант
        for ( let i = 1; i < 2; i++ ) {
            const genres = prompt('Напишите выши любимые жанры через запятяю','');
            if( genres == null || genres == ' ') i--;
            else {
                this.genres = genres.split(', ');
                this.genres.sort();
            }
            
        }
            this.genres.forEach( ( elem, index  ) => {
                console.log(`Любимый жанр #${index + 1} - это ${elem}`);
            })
    },
    movies:{},
    actors:{},
    genres:[],
    privat:false,
}



personalMovie.start();

personalMovie.rememberMyFilms();



personalMovie.detectPersonalLevel();



personalMovie.showMyDB( personalMovie.privat );

personalMovie.toggleVisibleMyDB();


personalMovie.writeYourGenres();

// console.log( personalMovie.genres );
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






