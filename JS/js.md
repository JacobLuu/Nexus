1. Phân biệt cookies, sessionStorage và localStorage
A.Cookies:
- Cookies là các tệp được trang web người dùng truy cập tạo ra. Cookies giúp trải nghiệm trực tuyến của bạn dễ dàng hơn bằng cách lưu thông tin duyệt web. Với Cookies, các trang web có thể duy trì trạng thái đăng nhập của bạn, ghi nhớ tùy chọn trang web và cung cấp nội dung phù hợp với vị trí của người dùng. Và bản chất lưu trữ Cookie cũng là một bản ghi đơn giản gồm key, value.
- Cookies có thể access được ở browser client và cả phía server.
- Cookies có thời gian hết hạn expires, sau thời gian này thì cookies sẽ biến mất khỏi browser.
- Cookies chỉ cho phép lưu tối đa khoảng 4 KB, vì vậy ta nên sử dụng cookies với mục đích save những loại data đơn giản.

B. LocalStorage:
- LocalStorage lưu trữ dữ liệu vô thời hạn, có nghĩa dữ liệu sẽ không bị mất cho tới khi bạn sử dụng tính năng clear history của trình duyệt, hoặc bạn sử dụng chính localStorage API để xóa.

- Dữ liệu lưu trữ tối đa 5MB.

- Bảo mật tốt hơn Cookies.

- LocalStore có 5 phương thức như sau:
    + setItem(): Thêm dữ liệu vào localStorage
    Syntax: localStorage.setItem(key, value);
    + getItem(): Lấy dũ liệu từ localStorage
    Syntax: localStorage.getItem(key)
    + removeItem(): Xóa dữ liệu ra khỏi localStorage
    Syntax: localStorage.removeItem(key);
    + clear(): Xóa toàn bộ dữ liệu ra khỏi localStorage
    Syntax: localStorage.clear();
    + key(): Lấy tên key của dữ liệu đang lưu trữ trong localStorage

C. SessionStorage:
- Công dụng của sessionStorage cũng tương tự như localStorage, chỉ có một điểm khác đó là dữ liệu của sessionStorage sẽ mất khi đóng trình duyệt, còn localStorage thì không.

- Dữ liệu lưu trữ tối đa 10MB.

- Ngoài ra, sessionStorage sẽ lưu trữ khác nhau cho mỗi tab. Nghĩa là khi bạn lưu dữ liệu ở tab này, xong mở tab khác lên thì sẽ không thể sử dụng được dữ liệu đó.

- SessionStorage không tồn tại hai phương thức getItem và setItem mà sẽ bổ sung key và value cho nó.

- SessionStorage cũng có 5 phương thức như sau:

    +setItem(): Thêm dữ liệu vào sessionStorage
    Syntax: sessionStorage.setItem(key, value);
    +getItem(): Lấy dữ liệu từ sessionStorage
    Syntax: sessionStorage.getItem(key)
    +removeItem(): Xóa dữ liệu ra khỏi sessionStorage
    Syntax: sessionStorage.removeItem(key);
    +clear(): Xóa toàn bộ dữ liệu ra khỏi sessionStorage
    Syntax: sessionStorage.clear();
    +key(): Lấy tên key của dữ liệu đang lưu trữ trong sessionStorage.

2. Javascript data type:
- String: trình bày kiểu văn bản
  Ex: "hello world!"
- Number: kiểu số
  Ex: 15,...
- Boolean: 2 giá trị true, false
  Ex: var a = true;
- Undefined: undefined sẽ được trả về khi khai báo biến nhưng không gán giá trị cho nó
  var a;
- Null: là kiểu giá trị đặc biệt biểu thị empty hoặc unknown value
  var a = null;
- Symbol: là kiểu dữ liệu duy nhất và không thể thay đổi
  var a = Symbol('hi!')
- Object: dùng một cặp key-value để lưu trữ dữ liệu
  var a = {};
- NaN: Not a Number

3. Hoisting
- Hoisting là vấn đề liên quan đến cách khai báo biến trong Javascript. Theo quy tắc chung của hầu hết các ngôn ngữ lập trình, để sử dụng một biến thì phải khai báo nó trước. Nhưng javascript thì lại khác, có một số trường hợp có thể sử dụng biến rồi mới khai báo sau.
- Việc sử dung từ khóa let và var để khai báo một biến sẽ có sự khác biệt trong hoisting.

- Sử dụng var: Nếu biến chưa gán giá trị thì sẽ trả về undefined.
Ex:  console.log(counter); // undefined
        var counter = 1;
- Sử dụng let: Nếu biến chưa gán giá trị thì sẽ xuất hiện thông báo lỗi Cannot access before initialization.
Ex:   console.log(counter);
        let counter = 1;

4. So sánh "==" và "==="
"==": Toán tử so sánh, nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh đẳng thức
Ex: 10 == "10"; // return true
"===": so sánh cân bằng nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false.
Ex: 10 === "10"; // return false

5. 'this' 
- Từ khóa "this" sẽ trả về đối tượng mà nó thuộc về, hay gọi tới phương thức, thuộc tính đó.
- Sử dụng 'this' trong javascript function: javascript sẽ hiểu this là một biến toàn cục (không dùng strict mode)
Ex: function test(){
        this.author = "Minh";
    }
    test();
 
    console.log(window.author); // Minh
- 'this' trong các sự kiện javascript: Khi gán hành động cho các sự kiện javascript thì this chính là đối tượng html đang được gán sự kiện đó.
Ex: 
        // Lấy đối tượng
        var button = document.getElementById('btn');
        
        // Gán sự kiện
        button.addEventListener("click", function(){
        // Lấy thuộc tính type của đối tượng đang xử lý
        // chính là button có id="btn"
            alert(this.type);
        });
- 'this' trong javascript object: 
Ex: 
    var Person = {
        name : "",
        age : "",
        setInfor : function(name, age){
            this.name = name;
            this.age = age;
        },
        getInfor : function(){
            console.log(this.name);
            console.log(this.age);
        }
    };
- 'this' trong javascript class javascript:  this chính là instance mà bạn đã tạo ra từ class đó.
Ex: 
    class Person {
        constructor(name) {
            this.name = name;
        }
    
        // Adding a method to the constructor
        showName() {
            console.log(this.name);
        }
    }
    
    let person1 = new Person("Minh");
    person1.showName(); // Minh

6. Arrow function:
- Mục đích sinh ra là để viết ngắn gọn hơn, bỏ từ khóa function
- Nếu chỉ return 1 giá trị duy nhất mà không thực hiện lệnh nào thì có thể bỏ từ khóa return
- Arrow function không thể sử dụng làm constructor function
Ex: 
    hello = function() {
        return "Hello World!";
    }
    // Khi dùng arrow function: 
    hello = () => {
        return "Hello World!";
    }

7. Func.bind và Func.apply
