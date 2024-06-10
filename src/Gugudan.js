import React from "react";

//구구단 클래스 컴포넌트
class Gugudan extends React.Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
    score: 0,
  };

  submit = (e) => {
    e.preventDefault();
    //JS에서 이벤트 핸들러 내에서 호출되는 메서드로, 해당 이벤트의 기본 동작을 방지하는 역할
    //예를 들어, 폼이 제출될 때 페이지가 새로고되는 기본 동작을 막거나, 링크를 클릭했을 때 다른 페이지로 이동하는 것을 막을때 사용된다.
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      //parseInt는 문자열을 숫자로 변환하는 JS 내장 함수, 만약 문자열이 숫자로 변환 될 수 없는 경우 'NaN'(Not-a-Number)을 반환합니다.
      //만약 state의 value의 값이 state의 first 곱하기 state의 second 와 같을경우
      this.setState({
        //상태 값의 *재사용*이나 *새로운 값을 설정할 필요가 없고*, 단지 상태 업데이트 시 'first' 값을 *그대로 유지*하고 싶다면 'this.state.first'를 사용할 수 있다.
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        result: "딩동댕!",
        value: "",
        score: this.state.score + 1,
      });
      //setState의 result 값을 "딩동댕!"으로 지정한다
    } else {
      this.setState({
        result: "땡!",
        value: "",
        score: this.state.score - 1,
        //틀렸을때 땡 그리고 입력창(value) 클리어
      });
    }
    e.target.firstChild.focus();
    //이벤트가 발생한 요소의 첫 번째 자식 요소(DOM 구조에서 첫 번째 자식 요소에 접근하는 방법)
    //focus()메서드는 해당 요소에 포커스를 설정하는 메서드로, 포커스가 설정된 요소는 키보드 입력을 받을 준비가 된 상태가 된다. (이는 자식 요소가 입력 가능한 요소일 때 유용하게 사용된다.)
    //예: 'input' 또는 'textarea'
  };

  render() {
    return (
      <>
        <div>
          {this.state.first} 곱하기 {this.state.second} 는?
        </div>
        <form onSubmit={this.submit}>
          <input
            type="number"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            //onChange는 HTML 입력 요소에서 값이 변경될 때 발생하는 이벤트
            //setState는 React 클래스 컴포넌트 State를 업데이트하는 메서드
            //e.target.value는 이벤트가 발생한 요소의 현재값을 의미한다.
          />
          <button>입력!</button>
        </form>
        <div>
          {this.state.result} 점수: {this.state.score}
        </div>
      </>
    );
  }
}
export default Gugudan;
