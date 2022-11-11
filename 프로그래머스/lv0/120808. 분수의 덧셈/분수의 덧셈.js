function solution(denum1, num1, denum2, num2) {
    var answer = [];
    // 분수통분하기 
    const denum = num2*denum1+num1*denum2 // 분자의값 구하기
    const num = num1*num2   //분모의값 구하기
    
    let minnumber;  //작은수를 담을 변수를 하나 만들어줌 
    if(denum<num){
        minnumber=denum;
    }else{
        minnumber=num;
    }
    while(true){                // while문을 쓰는 이유는 조건이 만족하는동안에 계속 반복함 if문은 조건이 만족하면 그냥끝임 
    if(denum % minnumber===0){  //작은수를 나눴을때 0이되면 최대공약수인것임
        if(num % minnumber===0){    //if문안에 if문을 넣음 
            return[denum / minnumber, num/minnumber]
        }
    }
    minnumber = minnumber -1;
}
}

// 1.분모덧셈
// 2.분자분모의 최대공약수로 나눠줌
// 2-1.분자분모중 작은 수를 찾기
// 2-2.작은수를 분자분모로 나눠보기
// 2-2-1.둘다 나눠 떨어지면 그게 최대공약수임 >> 조건문 ~~하면 
// 2-2-2.안 나눠떨어지면 작은수를 1줄이고 2-2로 돌아가서 다시반복함 >> while 반복문을 사용