# 임승주 202030229
## 교제 예시 사이트 https://github.com/soaple/first-met-react-practice-v18

## 6월 12일 강의 내용

### 스타일링

#### CSS
***1. CSS란?***

        - CSS는 Cascading Style Sheets의 약자로 스타일링을 위한 언어
        - Cascading이란 계단식이라는 뜻으로 한 엘리먼트에 여러 스타일이 적응될 경우 스타일간의 충동을 막기 위해 계단식으로 스타일을 적용시키는 규칙을 갖고 있음
        - 즉 하나의 스타일이 여러 개의 엘리먼트에 적용될 수도 있고, 하나의 엘리먼트에도 여러 개의 스타일이 적용될 수도 있음
        - 엘리먼트에 스타일이 적용되는 규칙을 selector(선택자)라고 함, CSS는 이 선택자의 스타일로 이루어 짐

***2. CSS 문법과 선택자***

        - 선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 작성함
        - 선택자는 HTML 엘리먼트를 직접 넣어도 되고, 엘리먼트의 조합 혹은 class의 형태로 작성 가능함
        - 스타일은 property(속성)과 key value(키 값)로 이루어 지며, 이들은 콜론(:)으로 구분하고, 각 스타일은 세미콜론(;)으로 구분함

***3. 레이아웃과 관련된 속성***
    
    - 화면에 엘리먼트를 어떻게 배치할 것인지를 정의
    - 가장 중요한 속성은 display
    - 모든 엘리먼트는 기본 display 속성을 갖고 있지만 이 기본값을 변경해 줄 수 있음
    - none은 존재는 하지만 화면에 보이지 않는 것으로, 자바스크립트를 넣을 때 많이 사용함
    - block은 세로로 정렬되며, width의 height를 갖을 수 있음, 크기와 상관없이 한 줄을 점유 함
    - inline은 가로로 정렬되며, width의 height를 갖을 수 없음, 컨텐츠의 크기만큼 공간을 점유
    -  inline-block은 기본적으로 inline의 특성을 갖지만, with와 height 등 block의 특성을 사용할 수 있음

    -대표적인 block과 inline 태그
        - Block: <div> <table> <h1>-<h6> <p> <form> <ul>등
        - Inline: <span> <a> <br> <em> <strong> <input> <label> <img>

### styled-components
    - CSS 문법을 그대로 사용하면서 결과물을 스타일링 된 컴포넌트 형태로 만들어 주는 오픈소스 라이브러리 임
    - 컴포넌트의 개념을 사용하고 있어 리액트 개발에 많이 사용됨
        

## 6월 11일 강의 내용

### useContext

#### useContext란
    - 함수형 컴포넌트에서 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 더 좋은 방법이 있다.
    - useContext() 혹은 React.createContext()함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴함

### 컨텍스트 API

#### [1] React.createContext
    - 컨텍스트를 생성하기 위한 함수
    - 파라메타에는 기본값을 넣어주면 됨
    - 하위 컴포턴트는 가장 가까운 상위 레벨의 Provide로 부터 컨텍스트를 받게 되지만, 만일 Provide를 찾을 수 없다면 기본값을 사용함

#### [2] Context.Provider
    - Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됨
    - Provider 컴포넌트에는 value라는 prop이 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됨
    - 하위 컴포넌트를 consumer 컴포넌트라고 부름

#### [3] Class.contextType
    - provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용
    - Class 컴포넌트는 더 이상 사용하지 않으므로 참고만 함

#### [4] Context.Consumer
    - 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텐스트를 구독할 수 있음
    - 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부름 

#### [5] Context.displayName
    - 컨텍스트 객체는 displayName이라는 문자열 속성을 가짐
    - 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 displayName을 함께 표시해 줌

#### 여러 개의 컨텍스트 사용하기
    - 여러 개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용함

### 컨텍스트

#### 컨텍스트란?
    - 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달됨
    - 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식을 제공함
    - 이것을 통해 어떤 컴포넌트라고 쉽게 데이터에 접근할 수 있음
    - 컨텍스트를 사용하면 일일이 props로 전달할 필요없이 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있음

#### 언제 컨텍스트를 사용할까?
    - 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등이 있음
    - 또한 반복적인 코드를 계속해서 작성해 주어야 하기 때문에 비효율적임

#### 컨텍스트 사용 시 고려할 점
    - 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용함
    - 하지만 무조건 컨텍스트를 사용하는 것이 좋은 것이 아님
    - 왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문
    - 따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합 함

### 상속

#### 상속에 대해
    - 합성과 대비되는 개념으로 상속이 있음
    - 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념임
    - 하지만 리액트에서는 상속보가는 합성을 통해 새로운 컴포넌트를 생성함

```jsx
//Card.jsx
export default function Card(props) {
    const {title, backgroundColor, children} = props

    return (
        <div style={{backgroundColor: backgroundColor || "white"}}>
            { title && <h1>{title}</h1> }
            { children }
        </div>
    )
}
//ProfileCard.jsx
import Card from "./Card"

export default function ProfileCard() {
    return (
        <Card title="Seungjoo Lim" backgroundColor="#4ea842">
            <p>안녕하세요.</p>
            <p>리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    )
}
```

### 합성(마저함)

#### [2] Specializetion(특수화, 전문화)
    - 웰컴다이얼로그는 다이얼로그의 특별한 케이스임
    - 범용적인 개념을 구병이 되게 구체화하는 것을 특수화라고 함
    - 객체지향 안에서는 상속을 사용하여 특수화를 구현함
    - 리액트에서는 합성을 사용하여 특수화를 구현함

#### [3] Containment와 Specializetion 같이 사용하기
    - Containment를 위해서 props-children을 사용하고, Specializetion을 위해 직접 정의한 props를 사용하면 됨
    - Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props-children을 추가함
    - Dialog를 사용하는 SignUpDialog는 Specializetion을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기위해 <input>과 <button>을 사용함. 이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됨
    - 이러한 형태로 Containment와 Specializetion을 동시에 사용할 수 있음

## 6월 05일 강의 내용

### 합성

#### 합성에 대해
    - 합성(Composition)은 여러 개의 컴포넌트를 합쳐서 새로운 컴퍼넌트를 만드는 것
    - 조합 방법에 따라 합성의 사용 기법은 다음가 같이 나눌 수 있음

##### [1] Containment(담다, 포함하다, 격리하다)
    - 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있음
    - 범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있음
    - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋음
    - 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용함
    - 다음과 같이 props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됨
```jsx
export default function FancyBorder(props) {
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}
```

### Shared State

#### Shared State
    - Shared State는 state의 공유를 의미함
    - 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것

#### 하위 컴포넌트에서 state 공유하기
    - 물의 끓음 여부 확인
```jsx
//Calculator.jsx
import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator() {
    const [temperature, setTemperature] = useState()
    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input value={temperature} onChange={handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}/> 
        </fieldset>
    )
}
//BoilingVerdict.jsx
export default function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}
```

#### Shared State 적용하기
    - 하위 컴포넌트의 state를 부모 컴포넌트로 올려서 shared state를 적용함
    - 이것을 Lifting State Up (State 끌어 올리기)라고 함
    - 이를 위해 TemperactureInput 컴포넌트에서 온도 값을 가져오는 부분을 수정함

## 5월 29일 강의 내용

### 폼(마저 함)

#### File input 태그
    -  File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 된다. 

#### Input Null Value
    - 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없음
    - 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됨

## 5월 22일 강의 내용

### 리스트와 키

#### 리스트와 키란?
    - 리스트는 자바스크립트의 변수나 객체를 하나의 변수를 묶어 놓은 배열과 같은 것
    - 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다.
    - 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있다.

#### 여러 개의 컴포넌트 렌더링하기
    - 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있은 엘리먼트를 map()함수를 이용하여 렌더링 한다.

#### 리스트의 키에 대해 알아보기
    - 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유의 문자열"이다.
    - 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용됨
    - 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.

### 폼(form)

#### 폼이란?
    - 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됨

#### 제어 컴포넌트
    - 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다.

## 5월 8일 강의 내용

### 이벤트(마저 함)

#### Arguments 전달하기

    - 함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument) 혹은 인수라고 부른다.
    - 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 있다.

```jsx
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

    - 위에 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했다.
    - event라는 매개변수는 리액트의 이벤트 객체를 의미함
    - 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 됨
    - 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후 두번재 매개변수로 event가 자동 전달 됨(이 방법은 클래스형에서 사용하는 방법임)

### 조건부 렌더링

#### 조건부 렌더링이란?

    - props로 전달 받은 isLoggedIn이 true면 <UserGreeting/>을, false면 <GuestGreeting/>을 리턴한다
    - 이와 같은 렌더링을 조건부 렌더링이라 한다.

#### 엘리먼트 변수

    - 렌더링 해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수다.

#### 인라인 조건

    - 필요한 곳에 조건문을 직접 넣어 사용하는 방법
    1. 인라인 if
       - if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용함
       - &&는 and연산자로 모든 조건이 참일때만 참이 된다.
       - 첫번째 조건이 거짓이면 두번째 조건은 판단할 필요가 없음. 단축평가 *판단만 하지 않는 것이고 결과 값은 그대로 리턴됨
    2. 인라인 if-else
       - 삼항 연산자를 사용함
       - 문자열이나 엘리먼트를 넣어서 사용할 수도 있음

#### 컴포넌트 렌더링 막기

    - 컴포넌트를 렌더링하고 싶지 않을 때에는 null로 리턴함

## 5월 1일 강의 내용

### 훅의 규칙 (첫번째는 4월 17일 강의 내용에 있음)

#### 훅의 두번째 규칙

    - 두번째 규칙은 함수형 컴포넌트에서만 훅을 호출해야 한다는 것
    - 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨
    - 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있음

### 나만의 훅 만들기

    - 필요 하다면 직접 훅을 만들어 쓸 수도 있음. 이것을 커스텀 훅이라고 함

#### 1. 커스텀 훅을 만들어야 하는 상황

```jsx
import { useState, useEffect } from "react";

export default function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStaus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return "대기중...";
  }
  return isOnline ? "온라인" : "오프라인";
}
```

#### 2. 커스텀 훅 추출하기

    - use로 시작하는 훅을 만들고, 내부에서 다른 훅을 호출하면 됨
    - 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것임

```jsx
import { useState, useEffect } from "react";

export default function useUserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStaus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  });
  return isOnline;
}
```

    - 한가지 주의할 점은 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야 함

#### 3. 커스텀 훅 사용하기

    - 2에서 작성했던 코드를 사용자 훅을 사용하여 수정하면 다음과 같다

```jsx
import useUserSatus from "./useUserSatatus";

export default function UserStatus(props) {
  const isOnline = useUserSatus(props.user.id);
  if (isOnline === null) {
    return "대기중...";
  }
  return isOnline ? "온라인" : "오프라인";
}
```

### 이벤트

#### 이벤트 처리하기

    - DOM에서 클릭 이벤트를 처리하는 예제 코드

```jsx
<button onclick="active()">Active</button>
```

    - React에서 클릭 이벤트를 처리하는 예제 코드

```jsx
<button onClick={active()}>Active</button>
```

    - 둘의 차이점은
        1) 이벤트 이름이 onclick에서 onClick을 변경(Camel case)
        2) 전달하려는 함수는 문자열에서 함수를 그대로 전달

#### 이벤트 핸들러 추가하는 방법

    - 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출하도록 되어있음
    - bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined로 사용할수 없기 때문
    - bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있음
    - 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 한다
    - 함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지다.
    - 함수형에서는 this를 사용하지 않고, onClick에서 바로 HandleClick을 넘기면 된다.

## 4월 17일 강의 내용

### 중간고사 내용

#### 날짜: 4월 24일 수요일 11시 실습

### 훅(Hook)

#### 훅이란?

    - 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트함
    -예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음
    - 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅임
    - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현 가능함
    - Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미함
    - 훅의 이름은 모두 'use'로 시작함

#### useState

    - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook

#### useState 예시

```jsx
import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </>
  );
} //클릭할 때마다 숫자가 올라감
```

#### useEffect

    - useState와 함께 가장 많이 사용하는 Hook
    - 이 함수는 사이드 이펙트를 수행하기 위한 것
    - 영어로 side effect는 부수적인자용을 의미함. 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않는 코드가 실행되면서 버그가 발생하는 것'을 말함
    - 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가까움
    - 예로 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미함
    - 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에서는 작업이 완료될수 없음
    - 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말함

#### useEffect()함수의 사용

    - 첫번째 파라미터는 이펙트 함수가 들어가고, 두번째 파라미터로는 의존성 배열이 들어감
    - 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경 되었을 때 이펙트 함수가 실행 됨
    - 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행 됨
    - 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됨.

#### useMemo

    - useMemo() 훅은 Memoized value를 리턴하는 훅
    - 이전 계산값을 갖고 있기 때문에 연상량이 많은 작업의 반복을 피할 수 있음
    - 이 훅은 렌더링이 일어나는 동안 실행 됨
    - 따라서 렌더링이 일어나는 동안 실행 되서는 안될 작업을 넣으면 안됨
    - 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트 같은 것

```jsx
const memoizedValue = useMemo(() => {
  //연산량이 높은 작업을 수행하여 결과를 변환
});
```

#### useCallback

    -useCallback() 훅은 useMemo와 유사한 역할을 함
    - 차이점은 값이 아니 함수를 반환한다는 점
    - 의존성 배열을 파라미터로 받는 것은 useMemo와 동일
    - 파라미터로 받은 함수를 콜백이라고 함
    - useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환함

```jsx
const memoizedCallback = useCallback(
    () => {
        doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```

#### useRef

    - useRef() 훅은 레퍼런스를 사용하기 위한 훅
    - 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
    - useRef() 훅은 바로 이 레퍼런스 객체를 반환함
    - 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미

#### 훅의 첫번째 규칙

    - 첫번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미
    - 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨
    - 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함

## 4월 03일 강의 내용

### 컴포넌트

#### 컴포넌트의 정의

    - 리액트는 컴포넌트 기반의 구조를 가짐
    - 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미
    - 컴포넌트는 재사용이 가능해서 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있음

#### props의 개념

    - props는 prop(property: 속성, 특성)의 준말
    - props는 컴포넌트의 속성임
    - 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨
    - props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체임

#### props의 특징

    - 읽기 전용임. 즉, 변경할 수 없다는 의미
    - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨

    * Pure 함수 vs Impure 함수
        - Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수임
        - Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수임

#### Props 사용법

    - JSX에서는 key-value쌍으로 props를 구성함
    - 다음 코드처럼 props를 통해서 value를 할당 할 수도있고, 직접 중괄호를 사용하여 할당 할 수 있음

```jsx
function App(props) {
  return (
    <Layout
      width={2560}
      height={1400}
      header={<Header title="소풀의 블로그입니다." />}
      footer={<Footer />}
    />
  );
}
```

#### 컴포넌트의 종류

    - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용함
    - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용함
    - 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함

#### 함수형 컴포넌트

    - Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕,"뒤에 넣어 반환함

#### 클래스형 컴포넌트

    - Welcome컴포넌트는 React.Componet class로부터 상속받아 선언함

#### 컴포넌트 이름 짓기

    - 이름은 항상 대문자로
    - 이유는 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문
    * 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

#### 컴포넌트의 렌더링

    - 렌더링의 과정은 다음 코드와 같습니다.

```js
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(elemnet, docuement.getElementId("root"));
```

#### 컴포넌트 합성

    - 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
    - 리액트에서는  컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있음.

#### 컴포넌트 추출

    - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있음
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
    * 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋음

### State

#### State란?

    - State는 리액트 컴포넌트의 상태를 의미
    - 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미
    - 정확히는 컴포넌트의 변경가능한 데이터를 의미
    - State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 State에 포함시켜야함

#### State의 특징

    - 리액트만의 특별한 현태가 아닌 단지 자바스크립트의 객체일 뿐임
    - State는 변경은 가능하다고 했지만 직접 수정은 안됨
    - State를 변경하고자 한다면 setState()함수를 사용하면됨

#### 생명주기에 대해

    - 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는것
    - constructor(생성자)가 실행되면서 컴포넌트가 생성됨
    - 생성 직후 componentDidMount()함수가 호출됨
    - 컴포넌트가 소멸하기 전까지 여러 번 렌더링함
    - 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐
    - 렌더링이 끝나면 componentDinUpdate()함수가 호출됨
    - 마지막으로 컴포넌트가 언마운트 되면 componentWillUnmount()함수가 호출됨

## 3월 27일 강의 내용

### 엘리먼트

#### 엘리먼트의 정의

    - 엘리먼트는 리액트 앱을 구성하는 요소를 의미
    - 공식페이지에는 "엘리먼트는 리액트앱의 가장 작은 빌딩 블록들"이라고 설명함
    - 웹사이트의 경우는 DOM 엘리먼트이면 HTML요소를 의미

#### 리액트 엘리먼트와 DOM엘리먼트의 차이

    - 리액트 엘리먼트는 Virtual DOM의 형태를 취하고있음
    - DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움
    - 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움

#### 엘리먼트의 생김새

    - 리액트 엘리먼트는 자바스크립트 객체의 형채로 존재함
    - 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체

#### 엘리먼트의 특징

    - 가장 큰 특징은 불변성. 즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없음
    - 만일 바뀌면? 컴포넌트를 통해 새로운 엘리먼트를 생성하고 이전 엘리먼트와 교체를 해서 내용을 바꾸면 됨. 교체 작업을 위해선 Virtual DOM을 사용함

#### 엘리먼트 랜더링하기

##### Root DOM node

    - 다음 html코드는 id값이 root인 div태글 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드임
    이 div태그 안에 리액트 엘리먼트가 렌더링 되며, 이것을 Root DOM node라고 함

```js
<div id="root"></div>
//엘리먼트를 렌더링하기 위해서는 다음과 같은
```

#### 렌더링된 엘리먼트 업데이트 하기

    - 다음 코드는 tick() 함수를 정의하고 있음
    - 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링 해줌
    - 그런데 라인12에 보면 setInterval()함수를 이용해서 위에서 정의한 tick()를 1초에 한번씩

### JSX(JavaScript XML)

#### JSX란?

    - JavaScript에 XML을 추가한 확장 문법.

#### JSX의 역할

    - JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환함
    - React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환함
    - 만일 JS작업할 경우 직접 createElement함수를 사용해야 함
    - JSX는 가독성을 높여 주는 역할을 함

```jsx
class Hello extends React.Componet {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
export default Hello;
```

#### JSX의 장점

    - 코드가 간결해짐
    - 가독성이 향상됨
    - InJection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강해짐

#### JSX 사용법

    - 모든 자바스크립트 문법 지원
    - 자바스크립트 문법에 XML과 HTML을 섞어서 사용
    - 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용

## 3월20일 강의 내용

### 리액트 장점

    1. 빠른 업데이트와 렌더링 속도
        - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.
        - DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다.
    2.컴포넌트 기반 구조
        - 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
        - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
        - 그래서 리액트로 개발을 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
    3. 재사용성
        - 반복적인 작업을 줄여주기 때문에 생산성을 높여줌
        - 또한 유지보수 용이
        - 재사용이 가능하려면 해당 모듈의 의존성이 없어야 함
    4. 든든한 지원군
        - 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전 중
    5. 활발한 지식 공유 & 커뮤니티
    6. 모바일 앱 개발기능
        - 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발 가능

### 리액트의 단점

    1. 방대한 학습량
        -자바스크립트를 공부한 경우 빠르게 학습 가능하지만 아주 잘할 필요는 없음
    2. 높은 상태 관리 복잡도
        - state, component life cycle 등의 개념이 있지만 그리 어렵지 않음
        - component life cycle은 요즘 잘 안씀

## 3월13일 강의 내용

### GitHub 사용법
