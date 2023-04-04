function solution(i, j, k) {

    let arr = []
    let arr2 = []
    let answer = 0;
    
    for(let a=i; a<=j; a++) {  			  //i 와 j 사이의 수를 가져오기
            arr.push(String(a).split('')) // 문자로 변환 + 자릿수별로 쪼개서 가져오기
            arr2 = arr[arr.length-1]      // i와 j 사이의 모든 수는 배열의 마지막 값
      		for(let b = 0; b<arr2.length; b++) { 
             							  // k와 같은 숫자 찾아서 answer에 담기
            if(arr2[b] === String(k)) answer ++
            }
    }
    return answer
}