# 임승주 202030229
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
import {useState, useEffect} from "react";

export default function UserStatus(props) {
    const [isOnline,setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscribeUserStaus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    if (isOnline === null) {
        return "대기중..."
    }
    return isOnline ? "온라인" : "오프라인"
}
```
#### 2. 커스텀 훅 추출하기
    - use로 시작하는 훅을 만들고, 내부에서 다른 훅을 호출하면 됨
    - 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것임
```jsx
import {useState, useEffect} from "react";

export default function useUserStatus(props) {
    const [isOnline,setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscribeUserStaus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    return isOnline
}
```
    - 한가지 주의할 점은 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 커스텀 훅의 최상위 레벨에서만 해야 함
#### 3. 커스텀 훅 사용하기
    - 2에서 작성했던 코드를 사용자 훅을 사용하여 수정하면 다음과 같다
```jsx
import useUserSatus from "./useUserSatatus";

export default function UserStatus(props) {
    const isOnline = useUserSatus(props.user.id)
    if (isOnline === null) {
        return "대기중..."
    }
    return isOnline ? "온라인" : "오프라인"
}
```
### 이벤트
#### 이벤트 처리하기
    - DOM에서 클릭 이벤트를 처리하는 예제 코드
```jsx
    <button onclick="active()">
        Active
    </button>
```
    - React에서 클릭 이벤트를 처리하는 예제 코드
```jsx
    <button onClick={active()}>
        Active
    </button>
```
    - 둘의 차이점은 
        1) 이벤트 이름이 onclick에서 onClick을 변경(Camel case)
        2) 전달하려는 함수는 문자열에서 함수를 그대로 전달
#### 이벤트 핸들러 추가하는 방법
    - 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출하도록 되어있음
    - bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined로 사용할수 없기 때문
    - bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있음
    - 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 한다

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
import React, {useState} from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>클릭</button>
        </>
    )
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
const memoizedValue = useMemo(
    () => {
        //연산량이 높은 작업을 수행하여 결과를 변환
    }
)
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
                header={
                    <Header title="소풀의 블로그입니다." />
                }
                footer={
                    <Footer />
                }
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
        ReactDOM.render(
            elemnet,
            docuement.getElementId('root')
        );
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
        return <div>Hello {this.props.toWhat}</div>
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
### 교제 예시 사이트 https://github.com/soaple/first-met-react-practice-v18