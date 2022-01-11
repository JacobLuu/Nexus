# 1. Class component / functional component
## functional component: 
* 1 functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React.
* Phải trả về 1 React element.
* Nhận props làm tham số nếu cần.
>Ex:

    function Example() {
    return ( <h1>I'm a functional component!</h1> );
    };

## Class component:
* Là một class ES6, nó sẽ là một component khi nó "kế thừa" React component.
* Có thể nhận props (trong hàm khởi tạo) nếu cần.
* Có thể maintain data của nó với state.
* Phải có 1 method render() trả về 1 React element (JSX), or null.
>Ex: 

    import React, { Component } from 'react';
    class ExampleComponent extends Component {
        render(){
            return (<div> This is an example component.</div>);
        }
    }
    export default ExampleComponent;

## Điểm khác biệt: 
* Class Component chúng ta có thể sử dụng được state một cách dễ dàng khi khởi tạo (init) state ngay trong phương thức constructor của Class Component bằng this.state:
>Ex: 

    class Hello extends React.Component {
    render() {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        return (
        <div className="App">
            Hello {this.props.name}
            {this.state.count} //lấy dữ liệu từ state.
        </div>
        );  
    }
    }
    
# 2. JSX
* **JSX** = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.
* Syntax: 

        <JSXElementName JSXAttributesopt>
        </JSXElementName>
    >Ex:

        const element = <h1>Hello, world!</h1>;

## Nhúng Biểu thức trong JSX: 
* Có thể nhúng bất kỳ biểu thức JavaScript nào trong JSX bằng cách đóng nó trong dấu ngoặc nhọn.

        function formatName(user) {
        return user.firstName + < < + user.lastName;
        }

        const user = {
        firstName: <Harper<,
        lastName: <Perez<
        };

        const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
        );

        ReactDOM.render(
        element,
        document.getElementById(<root<)
        );
## JSX cũng là biểu thức:
    function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
    }
## Thuộc tính chỉ định với JSX:
    const element = <img src={user.avatarUrl}></img>;
## Chỉ định children với JSX:
    const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
    );

# 3. Các loại hook thường sử dụng: 

## A. useState:
* **useState** cho phép chúng ta khai báo một state trong functional component với cú pháp như sau:

        const [state, setState] = useState(initialValue); // Hoặc const [state, setState] = useState(()=> { // do something ... return initialValue; })

    * state chính là biến chứa local state, giống như state bên class.
    * setState là một hàm dùng để update lại cái state này, nó tương tự this.setState() bên class.
    * initialValue là giá trị khởi tạo đầu tiên của state. Chúng ta cũng có thể truyền vào một callback function để tính toán dữ liệu và trả về initValue.

    >Lưu ý:
    * state thay đổi thì component sẽ re-render.
    * setState không hoạt động một cách đồng bộ, nhằm tăng performance cho hệ thống, tránh re-render không cần thiết. Để fix trường hợp này chúng ta có thể truyền vào một callback fn cho setState để lấy giá trị cũ.
    * callback function truyền vào useState chỉ được chạy duy nhất là đầu tiên.
    * Có thể dùng nhiều state trong cùng một component nếu các state có ngữ nghĩa khác nhau.

## B. useRef:
* **useRef** dùng để lưu trữ các giá trị trong suốt vòng đời của một component. Nó thường được dùng để truy cập các thành phần trong DOM với thuộc tính ref. Cú pháp khai báo như sau:

        // khai báo 
        const ref = useRef(initialValue); 
        // truy cập dữ liệu 
        ref.current 
        // thay đổi dữ liệu 
        ref.current = newValue;

>Lưu ý:
* Có thể truy cập và thay đổi giá trị trực tiếp của biến thông qua thuộc tính current của nó.
* **useRef** sẽ không làm component bị re-render mỗi lần current thay đổi. Điều này rất hữu dụng cho việc tăng performance hệ thống.
* Một vài ứng dụng thường dùng của **useRef** như ref đến ô input để auto focus, lấy kích thước của một element, lưu trữ giá trị input để validation, …

## C. useEffect:
* Khái niệm Side Effects: là những thao tác, event bên ngoài component của chúng ta như việc thao tác với DOM, call APIs, setTimeout, setInterval, …

* Clean up dùng để huỷ các đăng ký, các hàm đang được thực thi trong side effects. Có 2 loại sau:

* Cần clean up (vì những hàm này vẫn sẽ tiếp tục chạy sau khi component đã bị unmount, dẫn đến dữ liệu không có chỗ để render ra gây ra tình trạng memory leak): setTimeout, setInterval, subscriptions.
* Không cần clean up (Vì những hàm này sau khi run sẽ tự động huỷ đi): thao tác với DOM, call API.
* **useEffect** cho phép chúng ta dễ dàng thao tác với các Side Effect này bên trong functional component. Đây có thể là một cách thay thế hiệu quả cho việc sử dụng lifecycle trong class component. Cú pháp chung như sau:

        useEffect(callback, [dependencies]); 
        // Ví dụ đầy đủ 
        useEffect(()=>{ 
            // do side effect ... 
            return () => { 
            // clean up
            } 
        }, [dependencies])

>Lưu ý:
* **useEffect** lưu chạy trong lần đầu tiên sau khi đã render (hay component đã mount).
Nếu mảng dependencies = [] thì useEffect chỉ chạy một lần duy nhất.
* Nếu không truyền vào mảng dependencies (không truyền chứ không phải là [] nhé), thì useEffect luôn chạy lại sau mỗi lần render.
* Nếu bất kỳ phần tử nào trong mảng dependencies thay đổi thì useEffect sẽ được chạy lại.
* Hàm clean up chạy trước mỗi lẫn useEffect được chạy lại và sau khi component unmount. Và nhớ clean up đối với các case cần clean up ở trên để tránh memory leak.
* useEffect như một sự kết hợp hoàn hảo của componentDidMount, componentDidUpdate, componentWillUnmount.
* Có thể dùng nhiều useEffect trong cùng một component. Và nên tách ra các useEffect xử lý các Side Effect khác nhau.
* Có một case là khi bạn call API để lấy dữ liệu về render lại component, nhưng trước khi dữ liệu được lấy về thì component đã bị unmount (có thể do người dùng chuyển trang), việc này dẫn đến tình trạng memory leak. Một tip khắc phục như sau:

        useEffect(()=>{ 
            let isSubscribe = true; // cờ báo hiệu component còn mount hay không? 
        (async function callAPI(){ 
            const data = await getData(); 
            if(isSubscribe && data){ 
                // chỉ re-render khi component chưa unmount 
                reRender(data); 
                } 
                })(); 
            return () => { 
                isSubscribe = false; // tắt cờ này nếu component bị unmount hoặc re-render; 
            } 
        }, [dependencies])

## D. useMemo:
* **useMemo** sử dụng kỹ thuật Memoization Caching giúp tối ưu hoá tốc độ và tiết kiệm bộ nhớ bằng việc ghi nhớ các kết quả đã được tính toán nếu cùng một đầu vào.

        const memoizedValue = useMemo(() => {
             // chạy một hàm tính toán phức tạp nào đó 
             return value; 
        }), [dependencies]);
>Lưu ý:
* Hàm tính toán phức tạp đó sẽ chạy lại mỗi lần dependencies thay đổi.
* **useMemo** chạy trong lúc rendering nên tránh sử dụng xử lý các Side Effects (hãy dùng useEffect cho TH này).
* ĐỪNG dùng **useMemo** mà KHÔNG truyền vào dependencies nào vì đơn giản nó không còn ý nghĩa gì
* Tránh lạm dụng **useMemo** cho các tính toán không quá phức tạp, vì sẽ lãng phí bộ nhớ cho việc caching.

## E. useCallback:
* **useCallback** tương tự như useMemo nhưng nó dùng để ghi nhớ một hàm callback. Nó rất hữu dụng khi chúng ta truyền hàm này làm props cho một component nào đó render rất nặng. Vì đôi khi function chúng ta không hề thay đổi sau mỗi lần render nhưng vì function là giá trị tham chiếu nên nó luôn bị thay đổi dẫn đến component con bị re-render không cần thiết. useCallback sẽ giúp chúng ta khắc phục điều này.

        const memoizedCallback = useCallback( () => { 
            // do something... 
            }, [dependencies], 
        ); 
        // Có thể sử dụng useMemo như useCallback nếu useMemo trả về 1 function
        useCallback(fn, deps) = useMemo(() => fn, deps)

## F. useReducer:
* **useReducer** giúp chúng ta tạo nên một kho lưu trữ các state và thay đổi state đó thông qua hàm dispatch một action và dựa theo loại action truyền đến mà xử lý thích hợp, sau đó trả về một state mới. Nếu bạn đã làm việc với Redux thì concept nó tương tự như thế.

        // reducer thường có dạng
        const reducer = (state, action) => {
            const { type } = action;
            switch(type){ 
                case 'ABC': 
                return newState; 
                ... 
                } 
            } 
        const [state, dispatch] = useReducer(reducer, initialArg, init);

# 4. Props - State:
## Props: 
* Các props là đối số của function. Các component trong React là các hàm trả về JSX. sử dụng lại một đoạn code, bạn có thể đặt mã đó vào một hàm và bất kỳ giá trị động nào mà mã được sử dụng trước đó đều có thể được chấp nhận làm đối số.
## State: 
* State cũng tương tự như props, nhưng nó là của riêng component và được kiểm soát hoàn toàn bởi chúng và state có thể thay đổi được và mỗi khi state thì đổi thì component đó sẽ được render lại.

# 5. Khi nào React sẽ re-render:
* Sử dụng useEffect
* React sẽ re-render sau khi thực hiện setState
* useEffect(callback )
    > Gọi lại callback sau khi component được re-render/ setState lại

    >Gọi callback sau khi component thêm element vào DOM(mounted)

    >Nếu đặt setState vào useEffect(callback) thì sẽ tạo ra 1 vòng lặp vô hạn
* useEffect(callback, [])
    >callback trong useState chỉ được gọi duy nhất 1 lần sau khi re-render, k có lần thứ 2

    >Dùng để render giao diện cho màn hình lần đầu tiên
* useEffect(callback, [dependencies])
    >React sẽ render lại mỗi khi dependencies có thay đổi

    >callback được gọi lại mỗi khi dependencies được setState lại
# 6. Use setState as variable/function:
* Truyền một giá trị vào setState được sử dụng khi ta chỉ muốn cập nhật giá trị của state và muốn thay đổi ở UI mà không liên quan gì đến giá trị trước đó
> Ex:

import React, { useState } from 'react';

    function Example() {

      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

*Truyền một function vào setState khi chúng ta cần thực hiện nhiều hành động khác nhau sau đó mới lấy giá trị return của hàm làm giá trị mới cho state hoặc cần sử dụng đến giá trị của state cũ

>Ex:
    import React, { useState } from 'react';

    function Example() {

      const [increase, setIncrease] = useState(0);
      const dosomething = (prevValue) =>{
        let a =1;
        let b = 2;
        console.log(a+b);
        return a+b;
      }
      return (
        <div>
          <p>{increase}</p>
          <button onClick={() => setIncrease(dosomething)}>
            Click me
          </button>
        </div>
      );
    }

# 7. Event handler
