function solution(n) {
    var answer = 0;
    let cnt =1      //  변수를 담고
    while(true){    // 반복문으로
        if(cnt *6 % n ===0){    // 변수에*6(피자조각)을 했을때 0으로 나눠지면 그게 정답임.
            return cnt          // 다시리턴함
        }
        cnt=cnt+1;
    }
    return answer;
}