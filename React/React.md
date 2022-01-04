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



