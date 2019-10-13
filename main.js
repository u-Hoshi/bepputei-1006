// const slide = document.getElementById("wrapper");
// const slideItems = document.getElementsByClassName("img");

// slideItems[0].classList.add("img");

// let activeNum = 0;
// const MaxSlideNum = slideItems.length - 1;

// const IntervalTime = 5000;
// const FadeOutTime = 1000;
// slideItems[0].classList.remove("active");

// setInterval(function() {
//   const currentNum = activeNum;
//   if (activeNum !== 2) {
//     slideItems[activeNum].classList.remove("active");
//     // setTimeout
//     // activeNum++;
//     // slideItems[activeNum].classList.add("active");
//   } else {
//     slideItems[activeNum].classList.remove("active");
//     activeNum = 0;

//     slideItems[activeNum].classList.add("active");
//   }
// }, IntervalTime);

const slide = document.getElementById("wrapper");
const slideItems = document.getElementsByClassName("img");
// element「ｓ」だから配列である
slideItems[0].classList.add("img");
// ↑で.activeをつけてフェードインさせる

let activeNum = 2;
const MaxSlideNum = slideItems.length - 1;
// ↑　写真の枚数が変わっても使えるようにする
// ↑　２の所に代入すれば使いまわせる
const IntervalTime = 5000;
// ↑ここで数値を管理しとくと楽
const FadeOutTime = 2000;
slideItems[0].classList.remove("active");
//↑で.acticveを外してフェードアウトさせる

setInterval(function() {
  // 最後だけ０に戻す必要があるからif文で条件分岐する
  const currentNum = activeNum;
  if (activeNum !== 2) {
    slideItems[activeNum].classList.remove("active");
    setTimeout(function() {
      slideItems[currentNum].classList.remove("zoom");
    }, FadeOutTime);
    activeNum++;
    // ↑でactiveNumに１を追加する
    slideItems[activeNum].classList.add("active", "zoom");
  } else {
    slideItems[activeNum].classList.remove("active");

    activeNum = 0;

    slideItems[activeNum].classList.add("active", "zoom");
  }
  setTimeout(function() {
    slideItems[currentNum].classList.remove("zoom");
  }, FadeOutTime);
}, IntervalTime);
