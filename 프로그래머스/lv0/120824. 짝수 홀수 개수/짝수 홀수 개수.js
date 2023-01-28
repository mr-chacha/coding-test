function solution(num_list) {
    let answer2=[];
    let answer = [];
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            answer2.push(i)
        }
    }
    answer=[answer2.length, num_list.length-answer2.length]
    return answer;
}