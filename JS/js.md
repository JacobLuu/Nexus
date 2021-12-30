# 1. Phân biệt cookies, sessionStorage và localStorage

## A. Cookies:
* Cookies là các tệp được trang web người dùng truy cập tạo ra. Cookies giúp trải nghiệm trực tuyến của bạn dễ dàng hơn bằng cách lưu thông tin duyệt web. Với Cookies, các trang web có thể duy trì trạng thái đăng nhập của bạn, ghi nhớ tùy chọn trang web và cung cấp nội dung phù hợp với vị trí của người dùng. Và bản chất lưu trữ Cookie cũng là một bản ghi đơn giản gồm key, value.
* Cookies có thể access được ở browser client và cả phía server.
* Cookies có thời gian hết hạn expires, sau thời gian này thì cookies sẽ biến mất khỏi browser.
* Cookies chỉ cho phép lưu tối đa khoảng 4 KB, vì vậy ta nên sử dụng cookies với mục đích save những loại data đơn giản.

## B. LocalStorage:
* LocalStorage lưu trữ dữ liệu vô thời hạn, có nghĩa dữ liệu sẽ không bị mất cho tới khi bạn sử dụng tính năng clear history của trình duyệt, hoặc bạn sử dụng chính localStorage API để xóa.

* Dữ liệu lưu trữ tối đa 5MB.

* Bảo mật tốt hơn Cookies.

* LocalStore có 5 phương thức như sau:
    * setItem(): Thêm dữ liệu vào localStorage
    >Syntax: localStorage.setItem (key, value);
    * getItem(): Lấy dũ liệu từ localStorage
    >Syntax: localStorage.getItem(key)
    * removeItem(): Xóa dữ liệu ra khỏi localStorage
    >Syntax: localStorage.removeItem(key);
    * clear(): Xóa toàn bộ dữ liệu ra khỏi localStorage
    >Syntax: localStorage.clear();
    * key(): Lấy tên key của dữ liệu đang lưu trữ trong localStorage

## C. SessionStorage:
* Công dụng của sessionStorage cũng tương tự như localStorage, chỉ có một điểm khác đó là dữ liệu của sessionStorage sẽ mất khi đóng trình duyệt, còn localStorage thì không.

* Dữ liệu lưu trữ tối đa 10MB.

* Ngoài ra, sessionStorage sẽ lưu trữ khác nhau cho mỗi tab. Nghĩa là khi bạn lưu dữ liệu ở tab này, xong mở tab khác lên thì sẽ không thể sử dụng được dữ liệu đó.

* SessionStorage không tồn tại hai phương thức getItem và setItem mà sẽ bổ sung key và value cho nó.

* SessionStorage cũng có 5 phương thức như sau:

    * setItem(): Thêm dữ liệu vào sessionStorage
    >Syntax: sessionStorage.setItem(key, value);
    * getItem(): Lấy dữ liệu từ sessionStorage
    >Syntax: sessionStorage.getItem(key)
    * removeItem(): Xóa dữ liệu ra khỏi sessionStorage
    >Syntax: sessionStorage.removeItem(key);
    * clear(): Xóa toàn bộ dữ liệu ra khỏi sessionStorage
    >Syntax: sessionStorage.clear();
    * key(): Lấy tên key của dữ liệu đang lưu trữ trong sessionStorage.

# 2. Javascript data type:
* String: trình bày kiểu văn bản
  >Ex: "hello world!"
* Number: kiểu số
  >Ex: 15,...
* Boolean: 2 giá trị true, false
  >Ex: var a = true;
* Undefined: undefined sẽ được trả về khi khai báo biến nhưng không gán giá trị cho nó
  >var a;
* Null: là kiểu giá trị đặc biệt biểu thị empty hoặc unknown value
  >var a = null;
* Symbol: là kiểu dữ liệu duy nhất và không thể thay đổi
  >var a = Symbol('hi!')
* Object: dùng một cặp key-value để lưu trữ dữ liệu
  >var a = {};
* NaN: Not a Number

# 3. Hoisting
* Hoisting là vấn đề liên quan đến cách khai báo biến trong Javascript. Theo quy tắc chung của hầu hết các ngôn ngữ lập trình, để sử dụng một biến thì phải khai báo nó trước. Nhưng javascript thì lại khác, có một số trường hợp có thể sử dụng biến rồi mới khai báo sau.
* Việc sử dung từ khóa let và var để khai báo một biến sẽ có sự khác biệt trong hoisting.

* Sử dụng var: Nếu biến chưa gán giá trị thì sẽ trả về undefined.
>Ex:  console.log(counter); // undefined
>> var counter = 1;
* Sử dụng let: Nếu biến chưa gán giá trị thì sẽ xuất hiện thông báo lỗi Cannot access before initialization.
> Ex:   console.log(counter);
>> let counter = 1;

# 4. So sánh "==" và "==="
**"=="**: Toán tử so sánh, nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh đẳng thức
>Ex: 10 == "10"; // return true

**"==="**: so sánh cân bằng nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false.
>Ex: 10 === "10"; // return false

# 5. 'this' 
* Từ khóa **'this'** sẽ trả về đối tượng mà nó thuộc về, hay gọi tới phương thức, thuộc tính đó.
* Sử dụng **'this'** trong javascript function: javascript sẽ hiểu this là một biến toàn cục (không dùng strict mode)

>Ex:

    function test(){
        this.author = "Minh";
        }
        test();
        console.log(window.author); // Minh

* **'this'** trong các sự kiện javascript: Khi gán hành động cho các sự kiện javascript thì this chính là đối tượng html đang được gán sự kiện đó.
>Ex: 

        // Lấy đối tượng
        var button = document.getElementById('btn');
        
        // Gán sự kiện
        button.addEventListener("click", function(){
        // Lấy thuộc tính type của đối tượng đang xử lý
        // chính là button có id="btn"
            alert(this.type);
        });

* **'this'** trong javascript object: 
>Ex: 

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
    
* **'this'** trong javascript class javascript:  this chính là instance mà bạn đã tạo ra từ class đó.
>Ex: 

        // class Person {
        constructor(name) {
            this.name = name;
        }
        // Adding a method to the constructor
            showName() {
                console.log(this.name);
            }
        }
        // let person1 = new Person("Minh");
        person1.showName(); // Minh

# 6. Arrow function:
* Mục đích sinh ra là để viết ngắn gọn hơn, bỏ từ khóa function
* Nếu chỉ return 1 giá trị duy nhất mà không thực hiện lệnh nào thì có thể bỏ từ khóa return
* Arrow function không thể sử dụng làm constructor function
>Ex: 

    hello = function() {
        return "Hello World!";
    }
    // Khi dùng arrow function: 
    hello = () => {
        return "Hello World!";
    }

# 7. Func.bind và Func.apply
## Bind() : 
* Dùng để xác định tham số **this** cho một function.
>Ex:

    var person = {
    firstName: 'Jacob',
    lastName: 'Luu',
    showName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
    };

    //showName truyền vào như callback, ở đây this chính là button
    $('button').click(person.showName); 

    // Dùng bind để xác định giá trị this
    $('button').click(person.showName.bind(person)); 
    //this ở đây vẫn là object person

* Không chỉ bind được giá trị this, bind còn bind được các tham số truyền vào cho hàm nữa. Do đó, Bind còn được dùng để viết partial function.

## Apply() :
* Dùng để gọi một hàm với giá trị của this và các đối số được truyền vào dưới dạng mảng.
>Ex:

        const array = ['a', 'b'];
        const elements = [0, 1, 2];
        array.push.apply(array, elements);
        console.info(array); // ["a", "b", 0, 1, 2]

# 8. If-else và switch-case
* Khi chuyển đổi giữa lệnh if-else sang lệnh switch thì bạn cần phải lưu ý một điều như sau: Đối với lệnh switch nó sử dụng toán tử so sánh bằng, còn đối vớ lệnh if thì bạn có thể sử dụng các toán tử khác như toán tử so sánh lớn hơn, bé hơn, ...

> Ex:

>Sử dụng lệnh if-else:

    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <script language="javascript">
                var number = parseInt(prompt("Nhập số cần kiểm tra"));

                var mod = (number % 2);

                if (mod == 0){
                    document.write(number + " là số chẵn");
                }
                else if (mod == 1){
                    document.write(number + " là số lẽ");
                }
                else{
                    document.write("Ký tự bạn nhập không phải số");
                }
            </script>
        </body>
    </html>

> Sử dụng switch:

    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <script language="javascript">
                var number = parseInt(prompt("Nhập số cần kiểm tra"));

                var mod = (number % 2);

                switch (mod)
                {
                    case 0 : {
                        document.write(number + " là số chẵn");
                        break;
                    }
                    case 1: {
                        document.write(number + " là số lẻ");
                        break;
                    }
                    default : {
                        document.write("Ký tự bạn nhập không phải số");
                    }
                }
            </script>
        </body>
    </html>

# 9. Các cách để “iterate" 1 array
* Dùng **Map** :
>Ex:

        var arrays = [1,4,6,8,5];
        arrays.map(item => {
            console.log(item)
        });

* Dùng **foreach** :
>Ex: 

        var arrays = [1,4,6,8,5];
        arrays.foreach(item =>{
            console.log(item)
        })

* Dùng **filter** : 
> Ex: 

        var arrays = [1,3,5,7,6,10];
        let evens = arrays.filter(number => number % 2 ===0);
        console.log (evens);

* Dùng **every** :
> Ex: 

        var arrays = [2,4,6,1,8];
        let evens = arrays.every( number => number % 2 ===0);
        console.log(evens); // false

* Dùng **some** :
>Ex: 

        var arrays = [2,3,5,7,9];
        let evens = arrays.some( number => number % 2 ===0 );
        console.log(evens); // true

* Dùng **for** : 
> Ex:

        var arrays = [3,5,9,8,2];
        for (let i ; i <= arrays.length ; i++){
            console.log(arrays);
        }
# 10. Array.map, Array.filter, Array.reduce, Array.sort

* **Array.map**: Hàm map() sẽ lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function. Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp, bên trong thân hàm anonymous sẽ có lệnh return về một giá trị và giá trị này sẽ thay thế cho phần tử đó.

>Syntax:

        array.map(function(item){
        // item chính là phần tử đang lặp
            return item; 
        // giá trị trả về sẽ thay thế cho giá trị ban đầu của phần tử
        });
    
>Ex:

    var a = [1,2,3,4,5];
    var b = a.map(function(item){
        return item*2;
    });
    console.log(b);

* **Array.filter**: Hàm filter được tích hơp sẵn trong đối tượng mảng giống như hàm map trong javascript. Về cách thức hoạt động thì nó giống hàm map, nghĩa là nó sẽ có một tham số dạng function và function này sẽ xử lý cho mỗi lần lặp. Nếu function return true thì phần tử lần lặp đó được chấp nhận, ngược lại sẽ không được chấp nhận.

>Syntax:

    objectArray.filter(function(value){
        return true / false;
    });

>Ex:

    var a = [2,4,6,7,9];
    var new_a = a.filter(function(item){
        return (item%2=0);
    });
    console.log(new_a);

* **Array.reduce()** : Hàm reduce sẽ duyệt qua từng phần tử trong mảng, sau đó trả về một giá trị cuối cùng, giá trị này phụ thuộc vào chương trình của hàm mà bạn truyền vào reduce.

>Syntax:

    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    
> total - giá trị trả lại trước đó của function, chính là giá trị của lệnh return cho mỗi lần lặp.

>currentValue - giá trị của phần tử hiện tại.

>currentIndex- chỉ số của phần tử hiện tại.

>arr - mảng mà phần tử hiện tại thuộc về.

>initialValue - tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu, còn không thì nó sẽ lấy giá trị của phần tử đầu tiên. Nếu mảng cần reduce rỗng thì bạn phải truyền giá trị này, nếu không sẽ bị báo lỗi.

>Ex: 

    var a = [1,2,3,4,5];
    var new_a = a.reduce(function(tong,giatri){
        if (item%2==0){
            return tong + giatri;
        }
        else{
            return tong;
        }
    });
    console.log(new_a); // 7

**Array.sort**: là hàm dùng để sắp xếp các phần tử trong chính mảng đó, đồng thời sẽ kết quả đã sắp xếp đó vào một mảng mới. Thứ tự sắp xếp mặc định được tính là tăng dần. Tuy nhiên, bạn có thể can thiệp vào quá trình sắp xếp bằng cách truyền vào nó một hàm callback.

>Syntax: 
    
    array.sort()

>Ex: 

    var a = [10,2,5,4,9];
    var new_a = a.sort(function(num1,num2){
        if (num2>num1){
            return -1;
        }
        else{
            return 0;
        }
    });
    console.log(new_a);

# 11. var, let và const

* **var**: Dùng khai báo biến.
>Syntax: 
    
    var tenbien;
>Ex: 

    if (true){
    var domain = "Jacob";
    }
    console.log(domain);
* **let**: Biến loại này chỉ có phạm vi trong khối khai báo. Vì vậy nó sẽ tối ưu trong trường hợp bạn cần khai báo một biến chỉ sử dụng tạm thời trong một phạm vi nhất định.
>Syntax: 

    let tenbien;

>Ex: 

    if (true){
    let domain = "Jacob";
    console.log(domain);
    }

* **const**: là một hằng số, vì vậy khi khai báo biến const thì bạn phải gán giá trị cho nó luôn, sau này cũng không thể thay đổi giá trị cho biến.

>Syntax: 

    const tenbien = "giá trị";

>Ex: 

    const a = "Jacob";

# 12. String interpolation

* Sử dụng để truyền biến vào trong string dễ dàng hơn Cú pháp: ${...} Sử dụng kết hợp với template literals

>Ex: 

    let num1 = 1;
    let num2 = 2;
    console.log(`Tổng là ${num1 + num2});
    // "Tổng là
    // 3"

# 13. setTimeout và setInterval

* **setTimeout** : thường được sử dụng thực thi hàm sau bao nhiêu mili giây kể từ khi gọi method setTimeout().
>Syntax: 

    setTimeout(expression,timeout);
>Ex:

    function sayHello(message, person) {
    alert( message + ', ' + person );
    }
    setTimeout(sayHello, 1000, "Hi", "Monica"); // Hi, Monica

* Để dừng hàm này, ta sử dụng:
>Syntax: 

    clearTimeout();

* **setInterval** : sử dụng để thiết lập độ trễ cho các hàm sẽ được thực hiện lặp lại như là hiệu ứng.
>Syntax: 

    setInterval(expression, interval);
* Điểm khác duy nhất giữa chúng là: setTimeout chỉ kích hoạt expression một lần trong khi setInterval sẽ kích hoạt expression sau một khoảng thời gian nhất định (trừ khi bạn cho nó dừng lại).

* Để dừng hoạt động của hàm setInterval, chúng ta sử dụng hàm: 

        clearInterval(timerId)
>Ex: 

    // Hello is alerted repeatedly after every 3 seconds
    let timerId= setInterval(() => alert('Hello'), 3000);

    // Clear intervals after 6 sec with the timer id 
    setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);

# 14. Promise
* Sinh ra để xử lý kết quả của một hành động cụ thể, kết quả của mỗi hành động sẽ là thành công hoặc thất bại 
* Promise được khởi tạo thì nó có một trong ba trạng thái sau:
>Fulfilled Hành động xử lý xong và thành công

>Rejected Hành động xử lý xong và thất bại

>Pending Hành động đang chờ xử lý hoặc bị từ chối

* Syntax:

        var promise = new Promise(function(resolve, reject){
     
        });
>resolve là một hàm callback xử lý cho hành động thành công.

>reject là một hàm callback xử lý cho hành động thất bại.

* Ex:

        <script>
        var promise = new Promise(function(resolve, reject){
            reject('Error!');
            resolve('Success!');
        });
        promise.then(
            function(success){
                console.log(success);
            },
            function(error){
                console.log(error);
            }
        );
        // kết quả: Error! 
        // do hàm này sẽ tác dụng với thao tác đầu tiên.

# 15-16.Async/await

* **Async / Await** là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API. Trong đó:
* **Async** - khai báo một hàm bất đồng bộ 
    >Syntax: async function someName(){...}

    * Tự động biến đổi một hàm thông thường thành một Promise.
    * Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
    * Async cho phép sử dụng Await.
* **Await** - tạm dừng việc thực hiện các hàm async. 
    > Var result = await someAsyncCall ()

    * Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
    * Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
    * Await chỉ có thể được sử dụng bên trong các function async.

# 17.Try/ catch
* **Try/catch** là một khối lệnh dùng để bắt lỗi chương trình trong javascript. Ta sử dụng try catch khi muốn chương trình không bị dừng khi một lệnh nào đó bị lỗi. Thường thì đó là những lỗi do người dùng nhập sai dữ liệu, hoặc người dùng thao tác bị sai.
* Syntax: 

        try {
            // Quăng lỗi ra
            console.log("Noi dung loi");  
        } catch (e){
            // Đón nhận lỗi và in ra
            // Vị trí này chỉ chạy khi ở try có quăng lỗi hoặc ở try 
            // sử dụng sai cú pháp ...
            console.log(e.message);
        } finally{
            // Cuối cùng chạy cái này
            // Luôn luôn chạy sau cùng
            console.log('End of try catch');
        }
>Ex:

    var username = 'admin';
    var password = 'abc';
    try {
        if (username !== 'admin' || password != 'abc'){
            console.log("Tên đăng nhập hoặc mật khẩu chưa chính xác");
        }
    }catch (e){
        console.log(e.message);
    }

# 18. Generators:
* **Generators**: là một function có thể được thực thi nhiều lần liên tiếp mà ngữ cảnh (số lượng biến, giá trị biến, trạng thái các thành phần bên trong hàm ...) đều có thể lưu lại sử dụng sau mỗi phiên. Với chức năng mới này, Generator function cũng có thể dừng thực thi bất cứ thời điểm nào, đợi một điều kiện nào nó xảy ra rồi mới tiếp tục thực thi.
>Ex: 

    function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
    }
    const generatorObject = generatorFunction(); // Line 3
    console.log(generatorObject.next().value); // Line 4
    console.log(generatorObject.next().value); // Line 5
    console.log(generatorObject.next().value); // Line 6
    // This will be executed first.
    // Hello, 
    // I will be printed after the pause
    // World!
    // undefined

# 19. Kí hiệu '...'

### A. Copy một mảng bẳng toán tử spread

    const arr1 [1,2,3];
    const arr2 [... arr1];
    console.log(arr2);
> Lưu ý: Chức năng copy này không có tác dụng với mảng nhiều chiều hoặc hàm.

### B. Kết hợp các mảng.

    const arr1 [1,2,3];
    const arr2 [4,5,6];
    const arr3 [...arr1,...arr2]
    console.log(arr3);

### C. Thêm phần tử vào mảng

    let arr1 [1,2,3,4];
    arr1 = [...arr1,4];
    console.log(arr1);

### D. Thêm thuộc tính vào đối tượng

    const Person = {
        Ten: Jacob,
        Gioi tinh: male,
    };
    const result = {...Person, tuoi : 25};

### E. Phép gán hủy cấu trúc 

    const Person = {
        Ten: Jacob,
        Gioi tinh: male,
        tuoi: 25
    };
    const {Ten, ... thongtin} = Person;
    console.log(Ten);
    console.log(thongtin);

### F. Tách chuỗi thành kí tự

    const a = {"Hello World"};
    const arr = [...a];
    console.log(arr);

# 20. Typescript
* Bản chất của **TypeScript** là biên dịch tạo ra các đoạn mã javascript nên ban có thê chạy bất kì ở đâu miễn ở đó có hỗ trợ biên dịch Javascript. Ngoài ra bạn có thể sử dụng trộn lẫn cú pháp của Javascript vào bên trong TypeScript.
>Ex:

    //Code viết bằng typescript
    class Customer {
        Name : string;
        constructor (firstName: string, lastName: string)
        {
                this.Name = firstName + "  " + lastName;
        }
        GetName()
        {
                return "Hello, " + this.Name;
        }
    }

    // Code biên dịch sang javascript:
    var Customer = (function () {
        function Customer(firstName, lastName) {
            this.Name = firstName + "  " + lastName;
        }
        Customer.prototype.GetName = function () {
            return "Hello, " + this.Name;
        };
        return Customer;
    }());

> Code viết bằng typescript "trong sáng" và mạch lạc hơn.