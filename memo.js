/*alert('こんにちは！');
// alert(111 + 222);
// その他のダイアログ confirm(OK/cansel) prompt(入力を受け取る)

main.js  200前後 　条件分岐

　　　//2つの値を比較する
・2つの値の比較には以下の演算子が使えます。

コード	結果	説明
1 == 1	true	左右が同じ場合はtrue
1 != 1	false	左右が異なる場合はtrue
5 > 5	false	左が右より大きい場合はtrue
5 >= 5	true	左が右と同じかより大きい場合はtrue
3 < 4	true	左が右より小さい場合はtrue
3 <= 4	true	左が右と同じかより小さい場合はtrue

上に挙げた比較では文字列と数値は区別されませんが、
文字列か数値かの種別も含めて一致しているかどうかを確認する比較演算子（===）もあります。
通常は === を使いましょう。バグ（プログラムの誤り）が起こりにくくなります。

コード	結果	説明
1 == '1'	true	左右が値の種類にかかわらず同じ場合はtrue
1 === '1'	false	左右が値の種類も含めて同じ場合はtrue
1 !== '1'	true	左右が種類も含めて全く一緒の場合以外はtrue

　　　//ANDとOR
   比較	        結果
true && true	true
true && false	false
false && true	false
false && false	false
true || true	true
true || false	true
false || true	true
false || false	false

　　//論理演算子
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators

　　//truthyとfalsy
　　これらはfalse
・false
・undefined
・null
・0
・NaN
・''　文字の入っていない文字列を表しています。このような文字列を、「空文字列」
　上記以外はtrueとなる

　　//








*/
