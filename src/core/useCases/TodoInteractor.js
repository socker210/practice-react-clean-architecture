import Todo from "../entities/Todo";

class TodoInteractor {
  constructor() {}
}

export default TodoInteractor;

// 자 생각을 해보자
// entity: domain object
// use case: business logic
// validator: validator

// entity와 use case를 어떻게 합침?
// entity는 pure한 entity만의 내용만 가지고 있음
// use case는 application에 특화된 business logic을 가지고 있음
// 만약에 todo를 저장할 때 title의 글자 수를 validation하고 싶을 경우 어떻게 처리를 해야 하는가
// 또한, TodoInteractor에서는 Todo객체를 받는 것인가 아니면 Todo의 멤버변수를 받아 여기서 생성을 하는 것인가
// 일단 확실한 건 validation은 TodoInteractor안에서 처리해야 한다. 왜냐하면 글자수 제한은 business logic이기 때문임.
// 자 그럼 TodoInteractor안에서 어떻게 title validation을 처리할 것인지 고민을 해보자. (생성자로 받을 props도 같이 고민하기)

// 자 먼저 Todo를 어떻게 생성을 할지 생각해보자
// 일단 title과 description을 받는다. 그리고 Todo를 TodoInteractor에서 생성을 한다
// 자 그러면 Adapter에서 TodoInteractor를 다룰 때 TodoInteractor를 하나만 생성을 하지는 않겟지 이것을 생성하고
// TodoInteractor에 구현된 비즈니스 로직을 그대로 사용해야 하니 여기서 Todo를 생성하고 Adapter에 전달해주겠지
// 자 그러면 Adapter, Presenter, Component에서 직접적으로 Entity를 사용하는 것이 아닌
// Use case 즉, TodoInteractor를 통해 Todo Entity를 제공받아 사용을한다.

// 의문점
// Repository와 Service는 Entity와 Use case(Interactor) 중 어떠한 것을 직접적으로 사용을 해야 하는가?
// Repository는 외부와 Service를 이어주는 중간 매게체이다. 그러므로 Entity와 Use case를 직접적으로 사용할 일이 없다.
// Service는 Use case와 동일한 레벨에 위치하며 이것은 말 그대로 application-specific business logic이다. 그러므로 Service는
// Entity를 직접적으로 사용하며 이것을 Repository에 전달하여 외부와 application을 연결한다.

// 의문점
// Entity를 component에서 받는것이 맞는건가 아니면 title, description을 따로 받는게 맞는건가
// 어디 layer에서 어디 layer까지 Entity를 DTO로 사용할 것인가
// Component는 말 그대로 데이터를 뿌려주는 것이다. 그러므로 어느 Entity에 종속이 되면 안된다. 즉, 어드 데이터가 들어와도 보여주고자 하는
// 데이터만 들어오면 Component는 데이터를 viewing할 수 있다. 그러므로 title, description이 맞다.
// Entity를 직접 import하여 생성하는 곳은 Use case만 존재한다. 나머지는 Entity를 직접 수정하는 것도 아니고 그냥 단순히 받아서 각 layer
// 에 맞게 전달만 할 뿐이다. 그러므로 직접 Entity를 전달하는 것이 아니므로 Entity가 어느 layer에서 어느 layer까지 사용되는 것은 없다.
