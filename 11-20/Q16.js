// Q16. 로꾸거
//문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

//입력 : 거꾸로
//출력 : 로꾸거

function reverseString(str) {
  const word = str.split("");
  const reverseWord = word.reverse();
  const joinWord = reverseWord.join("");
  return joinWord;
}
console.log(reverseString("거꾸로"));

//OK
