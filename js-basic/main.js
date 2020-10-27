// alert('こんにちは！');

// alert(111 + 222);

// その他のダイアログ confirm(OK/cansel) prompt(入力を受け取る)

// console.log('こんにちは！');
// console.log('JavaScriptの世界にようこそ！');

// let name = '太郎さん';
// console.log(name);
// console.log(name);
// name = '花子さん';
// console.log(name);

// const name = '太郎さん';
// console.log(name);
// console.log(name);
// name ='花子さん';
// console.log(name);

// console.log("Hello World!");
// シングルクォーテーションとダブルクォーテーションをそれぞれ文字列として出力する
// console.log("Hello ' World!");
// console.log('Hello " World!');

//   \n  で改行
// console.log('Hello \' World!');
// console.log("123\n456\n789");
// console.log('こんにちは、'+'太郎さん');
// console.log('111'+222);

/*const name = '太郎';
const hello = 'こんにちは、' + name + 'さん';
console.log(hello);
const goodEvening = 'こんばんは、' + name + 'さん';
console.log(goodEvening);*/

/*const numbers =`123
456
789`;
console.log(numbers);

const name = '太郎';
const hello = `こんにちは、${name}さん`;
console.log(hello);*/

/*
function helloConsole() { //関数を定義する
  console.log('こんにちは！');
}
helloConsole();//関数を呼び出す

function helloConsole() { //関数を呼び出す
  console.log('こんにちは！');
}
helloConsole();
helloConsole();
*/
/*
function helloConsole(name) { //関数を定義する
  console.log(`こんにちは、${name}さん！`);
}
helloConsole('太郎'); //関数を呼び出す
*/
/*
function greeting() {
  const hour = new Date().getHours(); //現在の時刻を取得
  if( hour  <= 11 ) {
        return 'おはようございます。'; //午前中なので、朝の挨拶を返す
    }
    return 'こんにちは。'; //午後(１２時以降)なので、お昼の挨拶を返す
}

console.log(greeting()); //関数を呼び出す
*/

/*  戻り値を返す関数
function greeting() {
    const hour = new Date().getHours(); //現在の時刻を取得
    if( hour <= 11 ) {
        return 'おはようございます。';
    }
    return 'こんにちは。';
}

const aisatsu = greeting();

console.log('太郎さん、' + aisatsu); //太郎さんという文字列と変数の値をコンソールに表示する
console.log('花子さん、' + aisatsu); //花子さんという文字列と変数の値をコンソールに表示する
*/

/*　引数を受け取り、戻り値を返す関数（正方形）
function findSquareArea(length) { //関数を定義する
  return length * length //引数を２乗した値を、戻り値として返す
}
const result = findSquareArea(5); //戻り値をresult変数に代入する
console.log(result); //result変数の値を、コンソールに表示する

　　//上記の関数は下記のようにも書ける
　　
function findSquareArea(length) { //関数を定義する
  const area = length * length; //引数を２乗した値を、area変数に代入する
  return area; //area変数の値を、戻り値として返す
}
const result = findSquareArea(5); //戻り値をresult変数に代入する
console.log(result); //result変数の値を、コンソールに表示する
*/

/*　引数を2つ使い、2つの値を足算する関数
function add(x,y) { //関数を定義する
  const sum = x + y; //引数を足算した値を、sum変数に代入する
  return sum; // sum変数の値を、戻り値として返す
}
const result = add(2,3); //戻り値をresult変数に代入する
console.log(result); //result変数の値を、コンソールに表示する
*/
/* 4-6関数　練習問題　三角形の面積を求める
function findTriangleArea(x,y,z) { //関数を定義
    const sum = x * y / z; //引数を計算した値を、sam変数に代入する
    return sum; //sum変数の値を、戻り値として返す
}
const result = findTriangleArea(5,2,2); //戻り値をresult変数に代入する
console.log(result); // result変数の値を、コンソールに表示する

　　三角形の面積を求めるので、高さと長さの数値だけで良かった。下記解答例
　　
function findTriangleArea(a,b) {
    return a * b / 2;
}
const area = findTriangleArea(5,2);
console.log(area);
*/
/*　無名関数　上の正方形のやつを書き換えてみる
const add = function (x,y) { //無名関数を定義して、変数に代入する
    const sum = x + y;
    return sum;
}
const result = add(2,3);
console.log(result);
*/

/* アロー関数
const add = (x, y) => { // アロー関数を定義して、変数に代入する
  const sum = x + y;
  return sum;
};

const result = add(2, 3);
console.log(result);

　　//{}ブロックで囲まれたのが一文だけで戻り値を返すだけなら省略できる
const add = (x, y) => x + y;

const result = add(2, 3);
console.log(result);

　　//引数が1つだけの場合仮引数を囲む()も省略できる
const double = x => x * 2;

const result = double(5);
console.log(result);
*/
