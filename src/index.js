import "./styles.css";

// 関数名：onClickAdd　引数なし　｛｝内に書いたすべての処理を行う
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  // "add-text"このidが持っている値を変数inputTextに格納する
  // 変数名：inputText　value＝inputに入力された値
  document.getElementById("add-text").value = "";
  //inputTextの値を空文字にする

  creatIncompList(inputText);
};

//未完了リスト（"incomp-list"が付いたところ）から指定の要素（引数に渡されたタグ）を削除する関数
// 引数にtargetと名前を付けて中に渡す
const deleteFromIncompList = (target) => {
  // idの中にあるtargetの中から子要素を削除
  document.getElementById("incomp-list").removeChild(target);
  // document.getElementById("comp-list").removeChild(target);
};

// 未完了のリストに追加する関数
const creatIncompList = (text) => {
  // 変数名：div　divタグのドムを生成
  const div = document.createElement("div"); //htmlのドムを生成
  // 作ったdivタグにレイアウトで使っているclassを付与
  div.className = "list-row";

  //変数名：li　liタグのドムを生成
  const li = document.createElement("li");
  // liタグの中身に要素を設定する
  li.innerText = text;
  // →　inputTextに格納された文字列が入ったliタグが生成された

  //button（完了）タグ生成
  const compButton = document.createElement("button");
  // ボタンに「完了」という文字を付ける
  compButton.innerText = "完了";

  // compButtonにクリックイベントを付与＝機能を付ける
  compButton.addEventListener("click", () => {
    // // ↓　この書き方でももちろん行けるけど、同じ内容のアクションがあるから、
    // // その関数を別で作って、作ったやつを呼び出すようにする
    // const deleteTaret = deleteButton.parentNode;
    // document.getElementById("incomp-list").removeChild(deleteTaret);

    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompList(deleteButton.parentNode);

    // 完了リストに移動させる
    // 完了ボタンを含む親タグを変数に入れる
    const addTarget = compButton.parentNode;
    // 完了ボタンがいるところの親タグの中の、最初の要素（タグ）の、テキストを取得する
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ（戻す）作成
    const backButtun = document.createElement("button");
    backButtun.innerText = "戻す";
    // 戻すボタンにイベントを追加する
    backButtun.addEventListener("click", () => {
      // 押された戻るボタンの親タグを、完了リストから削除する
      const deleteTarget = backButtun.parentNode;
      document.getElementById("comp-list").removeChild(deleteTarget);
      // 未完了のリストに表示させる
      // テキストを取得
      const text = backButtun.parentNode.firstElementChild.innerText;
      creatIncompList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButtun);
    // addTarget.appendChild(li);

    // 完了リストに追加
    document.getElementById("comp-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  // ボタンに「削除」という文字を付ける
  deleteButton.innerText = "削除";
  // ボタンに機能を付ける
  deleteButton.addEventListener("click", () => {
    // // 削除したいタグを持ってくる　parentNode：親タグを持ってくる
    // // 変数deleteTaretに、変数deleteButtonの親要素であるdivタグが全部入っている
    // const deleteTaret = deleteButton.parentNode;
    // // "incomp=list"が付いたところから、子要素deleteTaret(divタグ)を消す
    // document.getElementById("incomp-list").removeChild(deleteTaret);

    //押された削除ボタンの親タグ(div)を未完了リストから削除
    // 削除したいタグ（要素）を引数として渡す（deleteButtonの親要素）
    deleteFromIncompList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定する　書いた順で下に追加されていく
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加する（divタグをulの子要素にする）
  // "incomp=list"のidを持つものに対して、作ったdivを子要素に加える
  // 多分、ここではHTMLに書いた値は、つけたidでしか持ってこれない
  // divは、HTMLのタグじゃなくて、JSファイルで作った変数名
  document.getElementById("incomp-list").appendChild(div);
};

// イベントを作成
// "add-button"のidを持つものに対して、クリックイベント（onClickAdd関数を実行させる）を付与する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
