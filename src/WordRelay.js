import { useState, useRef } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("첫단어");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      //(현재 단어의 마지막 글자의 인덱스를 계산한다) === (사용자가 입력한 새 단어의 첫 글자를 반환한다.)
      //'첫단어'에서 word.length는 3이고 -1을 하면 2가 되는데 단어의 첫시작은 1이 아닌 0부터 시작하여 계산해야 하므로 우리가 구해야하는 위치의 값은 2이다. word[2]가 되야하는 것이다.
      setResult("정답");
      //일치할 경우 result는 '정답'
      setWord(value);
      //다음 진행할 word는 입력했던 value로 지정
      setValue("");
      //입력해야할 value값은 공백
    } else {
      setResult("오답");
      setValue("");
    }
    inputEl.current.focus();
  };
  return (
    <>
      <div>{word}</div>
      <form onSubmit={submit}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
