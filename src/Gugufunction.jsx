import { useRef, useState } from "react";

const Gugufunction = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const inputEl = useRef(null); // 초기값을 null로 useRef 객체 생성
  // 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 "상자"와 같다.
  // ref 속성은 React에서 특정 DOM요소에 직접 접근할 수 있게 해준다.
  // inputEl 객체는 {current: null} 의 형태로 초기화된다.
  // *input의 값(inputEl)은 = input(상자 = useRef)에서 입력한 값을 null로 초기화*

  const submit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setScore((prev) => prev + 1);
      setResult("딩동댕!");
      setValue("");
    } else {
      setResult("땡!");
      setValue("");
    }

    inputEl.current.focus();
    //실제 객체 선택시 .current를 사용한다.
    //currnet 속성은 useRef로 생성된 객체가 가리키는 실제 DOM 요소 또는 클래스 인스턴스를 의미한다.
    //폼이 제출될 때마다 input 요소에 포커스를 성정하여 사용자가 새로운 값을 입력할 수 있게 합니다.
    // submit할때 input에 포커스를 해주어서 다시 입력할 수 있게 해준다.
  };

  return (
    <>
      <div>
        {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={submit}>
        <input
          ref={inputEl}
          //input 요소의 ref 속성에 inputEl 객체를 전달한다. (null이 아닌 입력되는 값이 inputEl로 넘어가게 된다.)
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div>
        {result} 점수 : {score}
      </div>
    </>
  );
};

export default Gugufunction;
