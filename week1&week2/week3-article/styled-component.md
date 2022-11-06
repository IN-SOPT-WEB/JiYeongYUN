# Styled-components

styled-coponents 는 자바스크립트의 태그가 지정된 템플릿 리터럴과 CSS 의 기능을 사용하여 구성 요소에 반응하는 스타일을 제공하는 CSS-in-JS 스타일링을 위한 프레임워크이다.
본질적으로, styled-coponents 는 styled-components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있으며 Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있다.

### 🎨 Styled-components의 장점과 단점

> 장점

- 스타일링의 재사용

  styled-components 를 사용하면 사용자 인터페이스 디자인 포커스는 HTML 요소 또는 React 컴포넌트가 className 을 가진 것 처럼 자체 스타일을 포함하고 전체 프로젝트에서 쉽게 재사용 할 수 있는 styled-component 로 전환된다.

- props를 통한 동적 스타일링

  styled-components를 사용하면 classname을 추가하고 제거하면서 스타일을 변경하는 방식이 아니라, 내려받은 props의 값에 따라서 스타일을 달리할 수 있는 동적 스타일링이 가능하다. javaScript를 통해 스타일을 제어하는 일도 더욱 용이해진다.

  ```
  <h2 className="title primary">Hello World</h2>
  h2.Subtitle{
  font-size: 2em;
  color: green;

  &.primary{
      color: red;
  }
  }
  ```

  위의 코드❌❌❌❌❌

  ```
  const Subtitle = styled.h2`
  font-size: 2em;
  color: ${props => (props.primary ? "red" : "green")};
  `;
  <Subtitle primary>Hello World</Subtitle>;
  ```

  props를 이용한 스타일링 ⭕️⭕️⭕️⭕️⭕️

> 단점

- 가독성이 떨어진다.

  styled-components 파일을 따로 분리하지 않으면 HTML / CSS / JavaScript가 모두 한 파일에 모이게 되는데, styled-components도 `const`를 이용해서 변수처럼 일일히 선언을 하고 사용해야 하기 때문에, 작성할 때도 번거롭고 읽을때도 가독성이 떨어진다.
  하지만 styled-components 파일을 따로 분리해서 사용함으로써 가독성의 문제는 어느정도 해결이 가능하다.

- 렌더링 되는 시점에 스타일 코드가 추가된다.

  렌더 메서드 내에서 스타일 컴포넌트를 정의할 경우 렌더링 시마다 다시 생성되어 렌더링 속도가 크게 느려지므로 반드시 외부에서 스타일 컴포넌트를 정의해야 한다.

### 🎨 대체할 수 있는 라이브러리가 있는가?

> Emotion : CSS-in-JS 스타일 작업이 용이한 React에서 많이 쓰이는 스타일 프레임워크

    제공하는기능은 styled-components와 비슷하나 styled-components보다 조금 가볍고 빠르다고 한다.
    (유의미하진 않음)
    인라인 스타일을 작성하지만 클래스가 될 수도 있다는점, css proops를 결합하여 복잡한 스타일링을 진행할 수 있다는 장점이 있다.

> Stiches : React에서 제공하는 스타일 라이브러리이다.

    near-zeor runtime , SSR , multi-variant support 등의 특징이 있다.

### 🎨 난 어떤 스타일링 라이브러리가 가장 마음에 드는가?

스타일링 라이브러리는 styled-components 밖에 써보지 않아서 다른것들을 직접 비교할 수는 없지만,
지금은 쓰고있는게 가장 익숙하고 편한 것 같다. 스타일링도 재사용할 수 있다는점, props로 동적 스타일링이 가능하다는 점이 가장 매력적인데, emotion도 같은 기능을 제공한다고 하니 궁금하니깐 써보고싶다!
