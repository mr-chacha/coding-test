function solution(array) {
  ///1-4. 반복문의 길이만큼 반복한다
  let arraycnt =0;   
  let newarray=[];                        // 새배열을 하나 만들어줌 
  while(arraycnt < array.length){
      let mini=1000;                          // 0이라고 하지않은이유는 최대값 1000과 배열들을 비교할것 
     // 1-1. 배열에서 최소값을 찾는방법 
      let cnt = 0;                              //array의 배열음 담을 cnt라는 변수를 만들어준다.
      while(cnt < array.length) {
         if(mini > array[cnt]) {            //mini가 배열의 담긴값보다 크면 최소값이 아니라는 소리(true)니까 아래를 실행한다.
                mini = array[cnt];          //그 최솟값이 mini이다.     
      }           
      cnt = cnt + 1;                      //cnt는 배열의 길이를 담을 변수기때문에 0부터 계속 +1씩 증가되야함.
  }
 // 1-2새 배열에 넣는방법. 
  newarray.push(mini);                //새로만든 배열에 최소값을 넣어줌
  // 1-3 기존배열에 있는 값을 지우는방법
  let cnt2 = 0;                       //cnt2라는 새로운 변수를 만들어줌
  while(cnt2 < array.length) {            
      if(mini === array[cnt2]) {          //최소값이랑 원소가 같으면
          array[cnt2] = 1000;          //최소값이 최대값인 1000이 된다.라고 하고 break를 해서 코드를 빠져나온다. 
          break;
      }
      cnt2 = cnt2 + 1
  }
     
  /*
   if(1000>9[0]){     //array의 0번째값인 9와 1000을비교 했을때 이게 true면 아래값을 실행함.
      mini=9[0]       //1000이 9보다 크니까 9는 mini가된다.
  }
   if(9>-1[1]){       //mini가 된 9가 array의 1번째값인 -1보다 큰게 true니까 아래값을 실행함
      mini=-1[1]      //mini는 -1이된다.
  }
  if(-1>0[2]){        //mini가 된-1이 array의 2번재값인 2보다 크지않으니  false니까 아랫값을 실행못함.
      mini=-1[2]      //if문은 실행되지않고 minis는 -1이 된다.
  }
  */  
      
      arraycnt = arraycnt + 1;      
  }
  return newarray[Math.floor(array.length / 2)];

}


/*
1.배열 정리하기
1-1.배열중 작은값을찾아라
1-2.찾으면 새로운 배열에 넣어라
1-3.기존에 배열에서 지운대
1-4.배열의 길이만큼 반복한후 끝낸다 아니면 1.1로 돌아간다
1-5.반복한다.
2.가운데값 꺼내기
2-1.가운데값 꺼내는건 배열의 길이를 2로나누면됨. 그후 math.floor를하면 뒤에 소수점은 날라감.
*/

