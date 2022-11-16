function solution(numbers) {
    var answer = 0
    let sum=0;  //모든합을 담을 변수를만듬
    let cnt=0;
    while(cnt<numbers.length){  // cnt를 넘버에 길이만큼 돌게하고
      sum=sum+numbers[cnt];      // 합은 sum에 
        cnt=cnt+1;
    }
    
    return sum/numbers.length;
}