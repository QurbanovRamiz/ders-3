// var arr = [4, 65, 78, 30, 44, 76, 54, 99, 1000];

// // var max = arr[0];

// // for (var i = 1; i < arr.length; i++) {
// //   if (max < arr[i]) {
// //     max = arr[i];
// //   }
// // }

// var customerCard = {
//   type: "Visa",
//   isExpired: true,
// };

// // console.log(customerCard.type);

// var cars = ["BMW", "Volvo", "Saab", "Ford", "KIA"];

// // console.log(cars[4]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);
// // console.log(cars[4]);

// var count = 0;

// for (var i = 0; i < 100; i++) {
//   if (i % 3 == 0 && i % 4 == 0) {
//     count++;
//   }
// }

// // console.log(count);

// // for (var value of cars) {
// //   console.log(value);
// // }

// var designJobs = [
//   {
//     title: "Interyer Dizayner",
//     company: "LC Company",
//     salary: "600-800",
//     currency: "USD",
//     description:
//       "gvytfytgytf",
//     city: "Baku",
//     tags: "Dizayn, Memar",
//   },
//   {
//     title: "Interyer Dizayner",
//     company: "Code Academy",
//     salary: "600-800",
//     currency: "USD",
//     description:
//       "jguygyuguygyj",
//     city: "Baku",
//     tags: "Dizayn, Memar",
//   },
//   {
//     title: "Interyer Dizayner",
//     company: "Labrin",
//     salary: "600-800",
//     currency: "USD",
//     description:
//       "kguyguyguyg",
//     city: "Baku",
//     tags: "Dizayn, Memar",
//   },
//   {
//     title: "Interyer Dizayner",
//     company: "Gni Software",
//     salary: "600-800",
//     currency: "USD",
//     description:
//       "jhiuhiuhiuhjiu",
//     city: "Baku",
//     tags: "Dizayn, Memar",
//   },
// ];

// // for (var value of designJobs) {
// //   console.log(value.company);
// // }

// var person = {
//   firstname: "Vusal",
//   lastname: "Ahmadli",
//   sayName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// var arr = ["Orxan", "Natiq", "Rovshan"];

// var arr2 = [30, 20, 24];

// // for(var i=0; i<arr2.length; i++){
// //     console.log(arr2[i])
// // }

// var x = [
//   [179, 30], //0
//   [180, 21, 56], //1
//   [175, 23], //2
// ];

// for (var i = 0; i < x[0].length; i++) {}

// for (var i = 0; i < x.length; i++) {
//   for (var j = 0; j < x[i].length; j++) {
//     console.log(x[i][j]);
//   }
// }

// // boyuk dongunun birinci merhelesi
// // i = 0
// // j= 0 j < 2;
// // kichik dongunun birinci merhelesi
// // x[0][0] = 179
// // kichik dongunun ikinci merhelesi
// // x[0][1] = 30
// // boyuk dongunun ikinci merhelesi
// // i = 1
// // j = 0 j < 3
// // kichik dongunun birinci merhelesi
// // x[1][0] = 180
// // kichik dongunun ikinci merhelesi
// // x[1][1] =21
// // kichik dongunun uchuncu merhelesi
// // x[1][2] =56
// // boyuk dongunun uchuncu merhelesi
// // i=2
// // j=0 j<2
// // kichik dongunun birinci merhelesi
// // x[2][0] = 175
// // kichik dongunun ikinci merhelesi
// // x[2][1] = 23

// function test() {
//   console.log("salam");

//   var a = 7;
//   var b = 6;

//   if (a == 5) {
//     return;
//   }

//   console.log(a + b);
// }

// test();

// var fist=3
// var seconde=4
// var thirth=5
// console.log(fist +" "+ seconde +" "+ thirth)
// var n = 1234;
// var first;
// var second;
// var thith;
// var fourth;

// if (n <= 9999 && n >= 1000) {
//   first = (n % 10) * 1000;
//   n = (n - (n % 10)) / 10;
//   second = (n % 10) * 100;
//   n = (n - (n % 10)) / 10;
//   thith = (n % 10) * 10;
//   n = (n - (n % 10)) / 10;
//   fourth = n % 10;
// }

// console.log(first + second + thith + fourth);
var n = 1648;
var reverseN = 0;
if (n <= 9999 && n >= 1000) {
  for (var num = n; num > 0; num = (num - (num % 10)) / 10) {
    reverseN *= 10;
    reverseN += num % 10;
  }

  console.log(reverseN);
}
