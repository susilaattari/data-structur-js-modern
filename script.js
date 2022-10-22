'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '21:00',
    address,
    starterIndex = 2,
    mainIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`lebih enak di tambah ${ing1},${ing2} dan ${ing3}`);
  },

  orderFizza: function (bahanUtama, ...bahanPilihan) {
    if (bahanPilihan.length == 0) {
      console.log('Bahan Utama:', bahanUtama);
      console.log('anda belum memasukan bahan pilihannya');
    } else {
      console.log('Bahan Utama:', bahanUtama);
      console.log('bahan Pilihan', bahanPilihan);
    }
  },
};

// function kirimPesanan({
//   time = '21:00',
//   address,
//   starterIndex = 2,
//   mainIndex = 1,
// }) {
//   console.log(
//     `Order received! ${restaurant.starterMenu[starterIndex]} and ${restaurant.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//   );
// }

/*
=========================================================
====== Short Circuitng  ==================
=========================================================
*/
// console.log('========OR========');
// logic OR (||) yaitu : jika dia sudah menemukan type data yang benar maka dia langsung mennampilkannya dan akan mengabaikan type data selanjutnya
// console.log(23 || 'Susila'); // 23
// console.log(0 || 10); // 10
// console.log(undefined || 0); // 0

// console.log(0 || undefined || null || 'Susila' || 98);

// restaurant.pelanggan = 0;
// mencari nilai default jika undefined/null/0 maka akan memberi angka 23
// const pelanggan = restaurant.pelanggan ? restaurant.pelanggan : 23; //ini menggunakan IF ternary
// console.log(pelanggan);
// const pelanggan2 = restaurant.pelanggan || 23; //ini menggunakan circuiting
// console.log(pelanggan2);

// console.log('========AND========');
// console.log(
//   restaurant.pelanggan && restaurant.orderFizza('daging kambing', 'daging unta')
// );

// studi kasus
////======== DENGAN IF ======== /////

// if (restaurant.orderFizza) {
//   restaurant.orderFizza('telor dadar', 'sosis ayam', 'rumput laut');
// }

////======== DENGAN Circuiting AND ======== /////
// restaurant.orderFizza &&
//   restaurant.orderFizza('telor dadar', 'sosis ayam', 'rumput laut');

// console.log('========??========');
// const pelanggan3 = restaurant.pelanggan ?? 10;
// console.log(pelanggan3);

// const rest1 = {
//   nama: 'Susila-Food',
//   tamu: 0,
// };
// const rest2 = {
//   nama: 'Delis-Food',
//   pemilik: 'delis',
// };
// OR assignment operator (0,undefined,null)

// rest1.tamu = rest1.tamu || 10;
// rest2.tamu ||= 10;

// OR assignment operator (undefined,null)

// rest1.tamu = rest1.tamu ?? 10;
// rest2.tamu ??= 10;

// AND assignment operator

// rest1.pemilik &&= '<ANONYNUS>';
// rest2.pemilik &&= '<ANONYNUS>';

// console.log(rest1);
// console.log(rest2);

/*
=========================================================
====== Rest Pattern/pola And Parameter ==================
=========================================================
*/
/* 
====================
1.Descructuring
 A. ARRAY
=====================
*/
//  Spread example

// const arr = [1, 2, 3, ...[4, 5]];
// console.log(arr);

// rest example
// const [first, , theree, four, ...order] = [1, 2, 3, 4, ...[5, 6]];
// console.log(first, four, order);

// study kasus
// kumpulkan dahulu aray atau data yang ingin di tamplikan dengan menggunakan SPREAD OPERATOR (...) setelah itu kita Descructuring array tersebut dengan data yang kita pilih
// fungsi REst (...orderfood) untuk mengumpulkan sebuah array/data yang dimulai di sebelah kiri yang belum di Descructuring
// const [Focaccia, , GarlicBread, , fizza, ...orderFoood] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(`${Focaccia}, ${GarlicBread}, ${fizza}`, orderFoood);

// Object

// const { sat, ...orderHours } = restaurant.openingHours;
// console.log('Hari Libur', sat);
// console.log('Hari Kerja :', orderHours);

// function parameters

// const add = function (num, ...numbers) {
//   let sum = num; //3
//   if (numbers.length == 0) {
//     console.log('parameter kedua kosong :', numbers);
//     return;
//   } else {
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
//   }
// };

// add(3, 2, 3, 5, 7);
// add(3); // jika parameter ke 2 tidak di masukan maka akan mengembalikan array = []

// study kasus
// restaurant.orderFizza('bawang Bombai', 'sosis', 'bakso', 'jamur');
// restaurant.orderFizza('bawang Bombai');

// const pesanToping = ['sosis', 'bakso', 'otak otak'];
// const pesanToping1 = ['mie', 'bawang', 'spagethi'];

// restaurant.orderFizza(...pesanToping, ...pesanToping1);
// // ('sosis', 'bakso', 'otak otak','mie', 'bawang', 'spagethi')
// console.log('===================================');
// restaurant.orderFizza(pesanToping, ...pesanToping1);
// // (['sosis', 'bakso', 'otak otak'],'mie', 'bawang', 'spagethi')

/*
=========================================================
============ SPREAD OPERATOR (...) ======================
=========================================================
*/

//Sebelum ada Spread operator (....)
// const arr = [4,5,6]
// const newArr = [1,2,3,arr[0],arr[1],arr[2]]
// console.log(newArr)

// setelah ada Spread Operator / ES6 (Modern Js)
// dalam artian saya Spread operator sama dengan dengan descructuring atau membongkar sebuah array menjadi terpisah namun bedanya Spread Operator adalah membongkar keseluruhan dari array menjadi terpisah dan tidak membentuk array
// const arr = [4, 5, 6];
// const newArr = [1, 2, 3, ...arr];

// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Spagethi'];
// console.log(newMenu);

// // join 2 array

// const menu = [...newMenu, ...restaurant.starterMenu];
// console.log(menu);

// const ingrediens = [
//   prompt('masukan pesanan pasta yang kamu suka 1'),
//   prompt('masukan pesanan pasta yang kamu suka 2'),
//   prompt('masukan pesanan pasta yang kamu suka 3'),
// ];
// console.log(ingrediens);
/*

=======================================
menggunakan cara lama
--------------------------------------------

restaurant.orderPasta(ingrediens[0], ingrediens[1], ingrediens[2]);
=======================================

menggunakan cara baru / SPREAD OPERATOR (...)
----------------------------------------------
restaurant.orderPasta(...ingrediens);

*/
// const newRestaurant = { ...restaurant, founder: 'Susila Tropika' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Hallal Foood';
// console.log(restaurantCopy);
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
=========================================================
========= Descructuring Object and array ================
=========================================================
*/

// kirimPesanan({
//   time: '19:00',
//   address: 'jl Kh. Mahbubuh',
//   starterIndex: 3,
//   mainIndex: 2,
// });

// restaurant.orderDelivery({
//   time: '19:00',
//   address: 'jl Kh. Mahbubuh',
//   starterIndex: 3,
//   mainIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'jl Kh. Mahbubuh',
//   mainIndex: 2,
// });

// const { name, categories, openingHours } = restaurant;

// console.log(name, categories, openingHours);

// const {
//   name: restauranName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(`name: ${restauranName}`);
// console.log(`categoies:`, tags);
// console.log(`openingHours:`, hours);

// const { menu = [], name, categories, openingHours } = restaurant;

// console.log(menu, name, categories, openingHours);

/*
 =========array =============
*/

// const arr = ['name', 'alamat', 'email', 'password'];

// Descructur
// const [nama, alamat, email, password] = arr;

// console.log(arr[0]);

// menggunakan Descructur
// console.log(nama);

// const [index0, index1] = restaurant.categories;

// console.log(`index 0: ${index0}`);
// console.log(`index 1: ${index1}`);

// mengambil index dengan melompati index yang lain
// let [index0, , index2, index3] = restaurant.categories;
// console.log(`index 0: ${index0}`);
// console.log(`index 2: ${index2}`);
// console.log(`index 3: ${index3}`);
// console.log('===== merubah posisi index=========');
// // merubah posisi index dengan Descructur
// [index0, , index2, index3] = [index3, , index0, index2];
// console.log(`index 0: ${index0}`);
// console.log(`index 2: ${index2}`);
// console.log(`index 2: ${index3}`);

// const [start, main] = restaurant.order(2, 1);

// console.log(start);
// console.log(main);

///////////////////////////////////////
// Coding Challenge #1

/* 
Kami sedang membangun aplikasi taruhan sepak bola (sepak bola untuk teman-teman Amerika saya )!

Misalkan kita mendapatkan data dari layanan web tentang game tertentu (di bawah). Dalam tantangan ini kita akan bekerja dengan data. Jadi inilah tugas Anda:

1. Buat satu array pemain untuk setiap tim (variabel 'players1' dan 'players2')
2. Pemain pertama dalam susunan pemain mana pun adalah penjaga gawang dan yang lainnya adalah pemain lapangan. Untuk Bayern Munich (tim 1) buat satu variabel ('gk') dengan nama penjaga gawang, dan satu larik ('fieldPlayers') dengan 10 pemain lapangan yang tersisa
3. Buat array 'allPlayers' yang berisi semua pemain dari kedua tim (22 pemain)
4. Selama pertandingan, Bayern Munich (tim 1) menggunakan 3 pemain pengganti. Jadi buat array baru ('players1Final') yang berisi semua pemain team1 asli ditambah 'Thiago', 'Coutinho' dan 'Perisic'
5. Berdasarkan objek game.odds, buat satu variabel untuk setiap ganjil (disebut 'team1', 'draw' dan 'team2')
6. Tulis fungsi ('printGoals') yang menerima jumlah nama pemain yang berubah-ubah (BUKAN array) dan mencetaknya masing-masing ke konsol, bersama dengan jumlah total gol yang dicetak (jumlah nama pemain yang masuk )
7. Tim dengan odds yang lebih rendah lebih mungkin untuk menang. Cetak ke konsol tim mana yang lebih mungkin menang, TANPA menggunakan pernyataan if/else atau operator ternary.

DATA UJI UNTUK 6: Gunakan pemain 'Davies', 'Muller', 'Lewandowski' dan 'Kimmich'. Kemudian, panggil fungsi lagi dengan pemain dari game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Buat satu array pemain untuk setiap tim (variabel 'players1' dan 'players2')
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. Pemain pertama dalam susunan pemain mana pun adalah penjaga gawang dan yang lainnya adalah pemain lapangan. Untuk Bayern Munich (tim 1) buat satu variabel ('gk') dengan nama penjaga gawang, dan satu larik ('fieldPlayers') dengan 10 pemain lapangan yang tersisa
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3. Buat array 'allPlayers' yang berisi semua pemain dari kedua tim (22 pemain)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Selama pertandingan, Bayern Munich (tim 1) menggunakan 3 pemain pengganti. Jadi buat array baru ('players1Final') yang berisi semua pemain team1 asli ditambah 'Thiago', 'Coutinho' dan 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Berdasarkan objek game.odds, buat satu variabel untuk setiap ganjil (disebut 'team1', 'draw' dan 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6. Tulis fungsi ('printGoals') yang menerima jumlah nama pemain yang berubah-ubah (BUKAN array) dan mencetaknya masing-masing ke konsol, bersama dengan jumlah total gol yang dicetak (jumlah nama pemain yang masuk )

const printGoals = function (...players1) {
  console.log('Pemain Yang Mencetak Goal:', players1);
  console.log('JUmlah Goals:', players1.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. Tim dengan odds yang lebih rendah, lebih mungkin untuk menang. Cetak ke konsol tim mana yang lebih mungkin menang, TANPA menggunakan pernyataan if/else atau operator ternary.

team1 < team2 && console.log('team 1 memenangkan pertandingan');
team1 > team2 && console.log('team 2 memenangkan pertandingan');
