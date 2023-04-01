(()=>{
// ここに命令を書く
const $doc = document;
const $tab =$doc.getElementById('js-tab');
const $nav =$tab.querySelectorAll('[data-nav]');
const $content =$tab.querySelectorAll('[data-content]');
const ACTIVE_CLASS = 'is-active';
const navLen = '$nav.length'
// console.log('$content ',$content );

// 初期化
const init = () =>{
  $content[0].style.display = 'block';
};
init();

// クリックしたら起こるイベント
const handleClick = (e) => {
  e.preventDefault();

  // クリックされたnavとそのdataを取得
  const $this = e.target;
  const targetVal = $this.dataset.nav;

  // 対象外のnav、content全て一旦リセットする。
  let Index = 0 ;
  while(Index < navLen){
    $content[Index].style.display = 'none';
    $nav[Index].classList.remove(ACTIVE_CLASS);
    Index++ ;
};

  // 対象のコンテンツをアクティブ化する
  $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display='block';
  $nav[targetVal].classList.add(ACTIVE_CLASS);


};
// 全nav要素に対して関数を適応
let Index = 0;
while(Index < navLen){
  $nav[Index].addEventListener('click',(e)=> handleClick(e));
  Index++;
}
})();