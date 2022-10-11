// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

//const・let
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// var val1 = "var変数は上書き可能";
// console.log(val1);

// // var変数は再現可能
// var val1 = "var変数を再宣言";
// console.log(val1);
// let val2 = 'let変数';
// console.log(val2);

// // letは上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// // letは再宣言不可能
// let val2 = 'letは再宣言不可能';
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// val3 = 'const変数は上書き不可能';
// console.log(val3);

// // constはは再宣言ふか
// const val3 = 'const変数は上書き不可能';
// console.log(val3);

// constで定義したオブジェクトは変更可能
// const val4 = {
//   name: "じゃkeェ",
//   age: 28,
//   adress: "hhhh"
// };

// val4.name = "jjj";
// val4.adress = "hiroshima";
// console.log(val4);

// const val5 = ['sog','cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ab";
// const age = 29;

// // 「私の名前はabです。年齢は29歳です。」

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は、${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "takahashi",
//   age: 38
// };

// const message3 = `名前は、${myProfile.name}です`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `${name}${age}`;
// console.log(message4);
