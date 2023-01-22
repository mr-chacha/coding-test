function solution(money) {
    const coffe = 5500
    const glass = Math.floor(money/coffe)
    const wksehs=money%coffe
    var answer = [glass,wksehs];
    return answer;
}