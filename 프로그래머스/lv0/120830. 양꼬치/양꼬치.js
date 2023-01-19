function solution(n, k) {
    const ram=12000
    const can=2000

      if(n>=10){
          k-=(n/10 << 0)
    }   
    
   
    
    var answer = n*ram + k*can;
    return answer;
}