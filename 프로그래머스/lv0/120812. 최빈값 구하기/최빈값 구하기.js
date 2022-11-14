function solution(array) {
    let sotearray = array.sort((a,b)=>a-b);
    var answer = 0;
    let cnt =0;
    
    let choi =-1            // 최빈값을 choi라고 변수를 준후 나올수없는값 -1을 부여함 
    let choirepeatcnt = 0;  // 최빈값이 될때 몇번반복해서 된건지
    let repeatcnt=0;        // 현재 똑같은 숫자가 몇번 나왔는지
    let befornumber =-1      //  이전숫자
    let isdupchoi=false;
    while(cnt<array.length){
        if(befornumber !== array[cnt]){     
            repeatcnt = 1;
        }else{
            repeatcnt = repeatcnt+1;
        }
        
        if(repeatcnt ===choirepeatcnt){
            if(choi !== array[cnt]){
                 isdupchoi = true;  
            }
        }
            
        if(repeatcnt>choirepeatcnt){
            choi = array[cnt];
            choirepeatcnt=repeatcnt;
            isdupchoi=false;
        }
        befornumber=array[cnt];
        cnt=cnt+1;
        
    }
    if(isdupchoi) return-1;
    return choi;
}

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 샌다
// 2. 최반값을 그때그때 기록한다.