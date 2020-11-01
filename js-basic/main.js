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

　　　　　/* 4−7　アロー関数
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

/*////　　function findTriangleArea(a,b) {
    return a * b / 2;
}
const area = findTriangleArea(5,2);
console.log(area);
　//上の三角形の面積を求める、アロー関数に書き換える

const add =(x,y) => {
  const sum = x * y / 2;
  return sum;
};
const result =add(5,2);
console.log(result);

const add = (x,y) => x * y /2;
const result = add(5,2);
console.log(result);　　////*/
/*
　　　　//　4-8　条件分岐
　　//trueとelse
if (10 > 3) {
  console.log('yes');
} else {
  console.log('no');
}
    //変数に保存することもできる
const result = 10 > 3;

if(result) { //resultがtrueの場合に実行される
  console.log('yes');
} else { //resultがfalseの場合に実行される
  console.log('no');  
}
　　//true と false は頭に ! を付けると反転できる
const result = 10 < 3;

if(!result) { //resultがfalseの場合に実行される
  console.log('yes');
} else {
  console.log('no');
}
*/
/*　　　　//　ANDとOR
const num = 5;

if (num >= 3) {
  if (num < 7) {
    console.log('ok');
  }
}
　　　　//　下記のようにシンプルにできる　
AND-&&
const sum = 5;

if (num >= 3 && num < 7) { //numが3以上かつ7未満の場合
  console.log('ok');
}
OR-||
const num = 1;

if (num < 3 || num >= 7) { //numが３未満または７以上の場合
  console.log('ok');
}*/
/*
　　//ANDとORの組み合わせ
　　
const a = 5;
const b = 20;

if (a === 3 && b < 7 || b >= 15) { //変数aが3で、かつ変数bが7未満または15以上の場合に「yes」
  console.log('yes'); 
} else {
  console.log('no');
} //a は 5 なので、本来は「no」と表示されるはずなのにyesになる


if ((a === 3 && b < 7) || b >= 15) { //&&は||より優先される

　　//|| が先に実行されるように ( ) で囲う

const a = 5;
const b = 20;

if (a === 3 && (b < 7 || b >= 15)) {
  console.log('yes');
} else {
  console.log('no');
}*/
/*
　　　　// truthyとfalsy
const result = undefined;
if (result) {
  console.log('truthy');
} else {
  console.log('falsy');
}*/
/*
　　　　//  else if
　　　　
　//・点数が80点以上なら「よくできました！」と表示する
　//・点数が80点未満だが、60点以上なら「合格です」と表示する
　//・60点未満であれば「もっとがんばりましょう」と表示する

const score = 70;

if (score >= 80) {
  // scoreが８０以上の場合に実行される
  console.log('よくできました！');
} else if (score >= 60) {
  // scoreが８０以上を満たさないが、scoreが６０以上の場合に実行される
  console.log('合格です');
} else {
  // scoreが６０以上も満たさない場合に実行される
  console.log('もっとがんばりましょう');
}　　//scoreが７０以上にしているので、合格ですと表示される*/
/*
　　　//配列とループ
//　配列を作成
const numbers = [1,2,3,4,5,7,10];

//　最初の要素を表示
console.log(numbers[0]);
*/
/*
　　//ループを使って配列の要素に1つずつアクセスする
// 配列を作成
const numbers = ['あ','い','う','え','お','か','き',];
// 各要素を表示
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
*/
/*
　　//サンプルコードの変更（数値の合計を求める）
// 配列を作成
const numbers = [1,2,3,4,5,7,10];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(`合計: ${total}`);
*/
/*
// 上記の total += numbers[i];は、total = total + numbers[i]; に書き換えれる
　　こうすると分かりやすい
const numbers = [1,2,3,4,5,7,10];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(`${i + 1}回目のループ:小計 = ${total} + ${numbers[i]}`);
  total += numbers[i];
}
console.log(`合計: ${total}`);
*/
/*
　　//breakとcontinue
for (let i = 1; i <= 50; i++) {
  // iが２０より大きい場合はループ処理を強制終了
  if (i > 20) {
    break;
  }
  // iが奇数の場合はスキップ
  if (i % 2 == 1) {
    continue;
  }
  // 2つのifの条件がtrueでない(iが偶数)ならiの値を表示
  console.log(i);
}
*/
/*
　　//4-9練習問題
for (let i = 1; i <= 100; i++) {
  //if (i % 3 == 0) 
  if ((i % 3 ) == 0) {
  console.log(Fizz)
  }
  //if (i % 5 == 0) 
  if ((i % 5 ) == 0) {
  console.log(Buzz)
  }
      console.log(i);
}
*/
/*
　　// 解答
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    // ３の倍数かつ５の倍数=１５のとき
    console.log('FizzBuzz');
  }else if (i % 3 == 0) {
  // ３の倍数のとき
  console.log('Fizz');
  }else if (i % 5 == 0) {
  // ５の倍数のとき
  console.log('Buzz');
  }else {
  // いずれも満たさないとき
  console.log(i);
  }
}
*/
　　//4-10オブジェクト
