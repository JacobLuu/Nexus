# 1. Phân biệt các kiểu position:
* Thuộc tính Position xác định loại phương thức định vị được sử dụng cho một phần tử.
* Position có 5 giá trị:
    * Static
    * Relative
    * Fixed
    * Absolute
    * Sticky
* Position (static) : Đây là giá trị hiển thị mặc định của position. Nó không bị ảnh hưởng bởi các thuộc tính như left, right, top, bottom.
* Position (relative) : Xác định vị trí tuyệt đối của của thành phần, khi sử dụng thuộc tính này chúng ta sẽ sử dụng kèm với các giá trị left, right, top, bottom, và bạn chỉ có thể sử dụng nhiều nhất 2 giá trị lền kề nhau ví dụ như (bottom, left), (left, top), (top, right), (right, bottom).

>Lưu ý: thuộc tính position (relative)  sẽ không làm thay đổi tới việc hiển thị ban đầu.

>Example: 

        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: relative;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>   

* Position (absolute) : Xác định vị trí tương đối theo thẻ cha có thuộc tính là position(relative)  nếu thẻ cha không phải là  position(relative) thì nó sẽ được xác đinh theo thẻ body của trang web.

>Lưu ý: thuộc tính position(absolute) sẽ làm thay đổi tới việc hiển thị ban đầu

>Example: 

        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: absolute;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>   
* Position(fixed) : Xác định vị trí tương đối cho cửa sổ trình duyệt, có nghĩa là nó luôn ở một vị trí ngay cả khi trang được cuộn. Nó dùng các thuộc tính left, right, top, bottom để xác định vị trí. Ứng dụng điển hình của nó có thể kể ra như giữ thanh menu của các trang web không bị mất đi khi cuộn xuống xem các nội dung khác.

>Example: 

        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: fixed;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>  

* Position(sticky) : Được toggle giữa relative và fixed khi người dùng cuộn đến vị trí được set theo top, left, bottom, right thì position sẽ được đổi thành fixed.

# 2. Z-index:
* Thiết lập thứ tự xếp chồng nhau của một thành phần vị trí.
* Thứ tự xếp chồng nhau được sắp xếp dựa vào giá trị số, thành phần HTML nào có giá trị chỉ số z-index cao hơn sẽ nằm ở trên.
* Z-index kết hợp cùng thuộc tính position. 
* Các giá trị z-index: 
    >Auto

    > Number

    > Inherit
    
>Example: 

    <style>
    img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    }
    </style>
    <body>
    <h2>Today is tuesday</h2>
    <img src="ảnh.jpg">
    </body>

# 3. Specificity:
* Tính đặc hiệu (độ ưu tiên) là cách mà trình duyệt quyết định áp dụng thuộc tính css nào với một phần tử khi có nhiều quy tắc css cùng trỏ đến phần tử đó.
* Các cách css cho một element:
    >Dùng inline CSS

    > Dùng extenal CSS: id , classes, attributes, ...

* Thứ tự ưu tiên: inline -> ids -> class, element,...
>Example:

    <style>
        h1 {background-color: yellow;}
        h1 {background-color: red;}
        h1 {background-color: green;}
    </style>
    <body>
        <h1>This is heading 1</h1>
    </body>

# 4. Box model & Box-sizing:
* Box-model của mỗi phần tử bao gồm: margins, borders, padding, content.
    > Content là kích thước phần nội dung của element đó

    > Padding là khoảng cách giữa content và border

    > Border là phần viền bao quanh toàn bộ padding và content

    > Margin là khoảng cách giữa element và các phần tử xung quanh nó

>Example:

    <style>
        div {
        background-color: lightgrey;
        width: 175px;
        border: 15px solid green;
        padding: 50px;
        margin: 20px;
        }
    </style>
    <body>
        <h2>Box Model</h2>
        <div>Tomorrow is wednesday </div>
    </body>
* Box-sizing: là thuộc tính xác định tùy chỉnh kích thước đối với width(height) để thiết lập chiều rộng (chiều cao). Bao gồm:
    > Content-box(default Value): các thuộc tính width, height sẽ đặt chiều rộng và chiều cao cho phần content của phần tử

    > Border-box: các thuộc tính width, height sẽ đặt chiều rộng và chiều cao cho toàn bộ phần tử, tính từ phần border vào, khi kích thước phần tử bị ảnh hưởng thì phần content sẽ bị co lại cho phù hợp với kích thước

    > Initial: sử dụng giá trị mặc định

    > Inherit: kế thừa từ phần tử cha

>Example: 

    <style> 
        .div1 {
        width: 300px;
        height: 100px;
        border: 1px solid blue;
        }
        .div2 {
        width: 300px;
        height: 100px;  
        padding: 50px;
        border: 1px solid red;
        }
    </style>
    <body>
        <h1>Without box-sizing</h1>
        <div class="div1">This div is smaller.</div>
        <br>
        <h1>Box-sizing</h1>
        <div class="div2">This div is bigger.</div>
    </body>
# 5. Media-query:
* Dùng để responsive thay đổi kích thước các phần tử, layout, CSS phù hợp với kích thước màn hình ở các độ phân giải khác nhau.
* Các break point: 

    >/* Extra small devices (phones, 600px and down) */
    >>@media only screen and (max-width: 600px)

    >/* Small devices (portrait tablets and large phones, 600px and up) */
    >>@media only screen and (min-width: 600px)

    >/* Medium devices (landscape tablets, 768px and up) */
    >>@media only screen and (min-width: 768px)

    >/* Large devices (laptops/desktops, 992px and up) */
    >>@media only screen and (min-width: 992px)

    >/* Extra large devices (large laptops and desktops, 1200px and up) */
    >>@media only screen and (min-width: 1200px)

# 6. Display: block & inline & inline-block:
* Block: Hiển thị một phần tử dưới dạng phần tử khối. Nó bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng.
* Inline: Hiển thị một phần tử dưới dạng phần tử nội tuyến (như `<span>`). Mọi thuộc tính chiều cao và chiều rộng sẽ không có hiệu lực.
* Inline-block: Giống Inline nhưng có thể thay đổi chiều cao và chiều rộng.
>Example: 

    <html>
    <head>
    <style>
        p {color: red;}
        p.ex2 {display: inline;}
        p.ex3 {display: block;}
        p.ex4 {display: inline-block;}
    </style>
    </head>
    <body>
        <h2>display: inline:</h2>
        <div>
         Today is <p class="ex2">Tuesday</p> !
        </div>
        <h2>display: block:</h2>
        <div>
       Today is <p class="ex3">Tuesday</p> !
        </div>
        <h2>display: inline-block:</h2>
        <div>
        Today is <p class="ex4">Tuesday</p> !
        </div>
    </body>
    </html>

# 7. !important:
* Thường sử dụng để tăng specificity cho một element lên mức cao nhất, thuộc tính nào có !important sẽ ghi đè toàn bộ các thuộc tính tương đồng được CSS ở những chỗ khác.
>Example: 

    <html>
    <head>
    <style>
      .a{
          background-color: aqua;
      }  
      #a{
          background-color: yellow;
      }
      p{
          background-color: tomato !important;
      }
    </style>
    </head>
    <body>
       <p class="a">123</p>
       <p id ="a">123</p>
       <p>123</p>
    </body>
    </html>
# 8. Đơn vị px, em, rem:
* px là đơn vị đo tuyệt đối và bị cố định độ dài.
* em & rem là đơn vị đo tương đối có thể thay đổi khi các phần tử nó phụ thuộc vào thay đổi.
    > em: Tham chiếu vào giá trị thuộc tính font-size của phần tử mẹ gần nhất.

    > rem: Tham chiếu vào giá trị thuộc tính font-size của phần tử gốc.

# 9. Overflow:
* Dùng để cắt nội dung hoặc thêm thanh cuộn khi nội dung của một phần tử quá lớn để vừa với khu vực được chỉ định.
* Các giá trị Overflow:
    > visible(mặc định): phần nội dung không bi bắt bớt. nó được hiển thị bên ngoài element

    > hidden: phần nội dung quá tải sẽ bị  ẩn đi

    > scroll: phần nội dung quá tải sẽ tạo thành thanh scrollbar để cuộn xuống những phần bị quá kích thước để có thể xem nội dung bị quá tải

    > auto: tương tự như scroll nhưng chỉ tạo scroll khi cần thiết

# 10. CSS preprocessors:
* CSS Preprocessors được Việt hóa bằng một cái tên rất hoành tráng: “ngôn ngữ tiền xử lý CSS”. Đây là một ngôn ngữ kịch bản mở rộng của CSS và được biên dịch thành cú pháp CSS giúp bạn viết CSS nhanh hơn và có cấu trúc rõ ràng hơn.
* Quy tắc xếp chồng: 

        // SASS
        header
            margin-bottom: 20px;
        nav
            height: 30px;
        a
            color: white;
        // Sau khi biên dịch sang CSS
        header {
            margin-bottom: 20px;
        }

        header nav {
            height: 30px;
        }
            
        header a {
            color: white;
        }

* Đặt biến trong SASS

      $blue-color: blue;  /* create variable for all links */
      $padding: 20px;  /* create variable for padding */

      nav {
        padding: $padding;
      }
      .sidebar a {
        color: $blue-color;
      }

# 11. Căn giữa cho thẻ div

>Cách 1:

    #container div{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%)
    }

>Cách 2:

    #container{
        display: flex;
        justify-content: center;
    }

# 12. Cách để sắp xếp khi ở màn hình lớn các element thuộc cùng 1 hàng ngang, ở màn hình nhỏ thì các element xếp chồng lên nhau thành 1 hàng dọc.
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            display: flex;
            justify-content: center;
        }
        .content{
            margin: auto 5px;
        }
        @media (max-width:568px) {
            .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            }
            .content{
            margin: auto 20px;
            }
        }

    </style>
    </head>
    <body>
    <div class="container">
        <div class="content"><img width="100px" height="100px" src="https://www.techrum.vn/chevereto/images/2017/04/18/TntO6.jpg" alt=""></div>
        <div class="content"><img width="100px" height="100px" src="https://www.techrum.vn/chevereto/images/2017/04/18/TntO6.jpg" alt=""></div>
        <div class="content"><img width="100px" height="100px" src="https://www.techrum.vn/chevereto/images/2017/04/18/TntO6.jpg" alt=""></div>
        <div class="content"><img width="100px" height="100px" src="https://www.techrum.vn/chevereto/images/2017/04/18/TntO6.jpg" alt=""></div>
    </div>
    </body>
    </html>