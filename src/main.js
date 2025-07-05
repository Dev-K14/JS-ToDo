import './style.css';

const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';
  //showCustomAlert(inputText);

  // HTML要素生成(未完了ToDo)
  const li = document.createElement('li');
  const div = document.createElement('div');
  const p = document.createElement('p');
  div.className = 'list-row';
  p.className = 'todo-item';
  p.innerHTML = inputText;
  
  // button(完了)タグ生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener("click", () =>{
    showCustomAlert("完了");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener("click", () => {
    showCustomAlert("削除");
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 生成した要素を未完了リストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

// add-buttonというIDが設定されたエレメントを取得
// addEventListenerで取得したエレメントにイベントリスナーを登録する
// イベントリスナーとは、特定のイベント(クリック、マウスオーバーなど)が発生したときに実行される関数
// ここでいうと、onClickAdd
// addEventListenerの引数1つ目はイベントの種類、2つ目に何を実行するか
// clickされたら、onClickAddを実行する
document.getElementById('add-button').addEventListener('click', onClickAdd);

function showCustomAlert(message) {
  // div要素を作成し、変数modalに格納します
  const modal = document.createElement('div');
  modal.innerHTML = `
      <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); 
                  background:white; padding:20px; border:1px solid #ccc; z-index:1000;">
          <p>${message}</p>
          <button onclick="this.parentElement.parentElement.remove()">OK</button>
      </div>
  `;
  // 最終的に作成した要素をページに追加します
  document.body.appendChild(modal);
}
