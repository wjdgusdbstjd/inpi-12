let currentNum = 0;
let totalNum = imgSet.childElementCount; //새로 코드를 사용할때마다 일일히 숫자를 바꾸지않아도 가능

console.log(totalNum);
let imgInit = function () {
    if (currentNum != 0) { //currentNum이 0이 아닐때만 실행
        $("#img" + currentNum).fadeIn();
    }
}

setInterval(function () {

    imgInit();
    if (currentNum == totalNum) { //만약에 currentNum이 4이면
        currentNum = 1; //1로 다시 되돌아가고
    } else {
        currentNum++; //4가 아닐때만 ++을 한다 
    }

    $("#img" + currentNum).fadeOut();

    let clear = setInterval(function () { //clear라는 이름에 setInterval함수 부여
        document.getElementById("imgSet").prepend(document.getElementById("img" + currentNum)); //imgSet에 prepend - 이미지 1이 마지막 장이 됐을 때 다시 맨 앞으로 옮겨준다
        clearInterval(clear); //clear해주지않으면 1초마다 계속 실행된다 
    }, 1000); //1000은 1초 뒤에 동작을 실행하라는 의미
}, 3000);