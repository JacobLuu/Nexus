# Các thẻ thường dùng sử dụng:

## 1. Thẻ <heading>:Thẻ biểu diễn tiêu đề trên web có độ lớn giảm dần từ thẻ `<h1>` => `<h6>`.
>Example:

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

## 2. Thẻ `<p>`: Thẻ biểu diễn nội dung đoạn văn.
>Example:

    <p> Hello World </p>

## 3. Thẻ `<img>`: Thẻ ảnh. Có thẻ lấy src từ web hoặc sử dụng trong file local có sẵn.
>Example:

    <img src="" alt="">

## 4. Thẻ `<a>`: xác định một liên kết. Thuộc tính href chỉ định URL của trang mà liên kết chuyển đến.
>Example:

    <a href="https://www.Nexus.com">Hello Nexus</a>

## 5. Thẻ `<title>`: Biểu diễn tiêu đề của web.
>Example:

    <title>Nexus</title>

## 6. Thẻ `<br/>`: Dùng để xuống dòng
>Example:

    <p> Hello World </p>
    <br/>
    <p> Hello Nexus </p>

## 7. Thẻ `<table>`: Tạo bảng
>Example:

    <table>
      <tr>
        <td>STT</td>
        <td>Họ và tên</td>
        <td>Ngày sinh</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Jacob</td>
        <td>15/07/1997</td>
      </tr>
    </table>

## 8. Thẻ `<div>`: Tạo một block chứa các thẻ khác bên trong, được dùng để chia layout web thành các thành phần nhỏ, căn chỉnh các thành phần của web và nội dung bên trong thẻ div dễ hơn.
>Example:

    <div class="Hello">
        <h1>Hello</h1>
    </div>
    <div class="Nexus">
        <h1>Nexus</h1>
    </div>

## 9. Thẻ `<iframe>`: dùng để nhúng video
>Example:

    <iframe src="url" title="description"></iframe>

## 10. Thẻ `<input>`: Tạo một vùng để user nhập dữ liệu, có thể hiện thị nhiều kiểu khác nhau tùy vào "type attribute" mặc định type ="text", các type khác thường dùng như: checkbox, radio,password, email, date, range, number, file, submit.
>Example:

    <input type="button"></input>
    <input type="checkbox"></input>
    <input type="color"></input>
    <input type="date"></input>
    <input type="email"></input>
    <input type="file"></input>
    <input type="hidden"></input>
    <input type="image"></input>
    <input type="number"></input>
    <input type="password"></input>
    <input type="radio"></input>
    <input type="range"></input>
    <input type="reset"></input>
    <input type="search"></input>
    <input type="submit"></input>
    <input type="text"> (default value)</input>
    <input type="url"></input>

## 11. Thẻ `<button>`: Tạo 1 nút bấm.
>Example: 

    <button type="button">Click Me!</button>

## 12. Thẻ `<style>`: Sử dụng để thêm CSS cho file HTML, dùng cho internal CSS.
>Example: 

    <style ="color:red;">Hello World</style>

## 13. Thẻ `<b>`: Bôi đậm chữ 
>Example:

    <b>Bôi đậm chữ</b>

## 14. Thẻ `<i>`: Dùng để tạo chữ nghiêng cho đoạn văn bản. Các thư viện font thường dùng thẻ này để sử dụng icon
>Example:

    <i>Chữ nghiêng</i>
    <i class="fab fa-angellist"></i>  - Tạo icon trong fontawesome

## 15. Thẻ `<script>`: Dùng để thêm trực tiếp script cho file HTML hoặc để liên kết với file Javascript thông qua chèn link file js vào attribute src của thẻ `<script>`.
>Example:

    <script>
        const btn = document.querySelector("#btn");
        btn.onClick = () => {
            alert(""HelloWorld)
        }
    </script>

## 16. Thẻ `<link>`: Là một phần tử trống, nó chỉ chứa các thuộc tính. Xác định mối quan hệ giữa tài liệu hiện tại và tài nguyên bên ngoài. Thường được viết trong thẻ <head>
>Example:

    <link rel="stylesheet" href="styles.css">

## 17. Thẻ `<textarea>`:  Dùng để điền văn bản nhiều dòng. Thường được sử dụng để thu thập thông tin người dùng. Kích thước được xác định bằng thuộc tính `<cols>` và `<rows>`. Sẽ có thêm thuộc tính name hoặc id để tham chiếu đến dữ liệu.
>Example:

      <textarea id="1" name="Jacob" rows="10" cols="50">
      Hello World!
      </textarea>

## 18. Thẻ `<body>`: Chứa nội dung của HTML

>Example:

    <body>
        <div>
            <p> Hello World</p>
        </div>
    </body>

## 19. Thẻ `<section>`: Chia đoạn trong văn bản.
>Example:

    <section>
    <h2>Đoạn 1</h2>
    <p>Today is monday</p>
    </section>

    <section>
    <h2>Đoạn 2</h2>
    <p>Tomorrow is Tuesday</p>
    </section>

## 20. Thẻ `<select>`: Dùng để tạo danh sách thả xuống. Thường dùng để cho người dùng có thể lựa chọn các sự lựa chọn. 
>Example:

    <select name="sothich" id="Jacob">
      <option value="bongda">Bóng đá</option>
      <option value="dulich">Du lịch</option>
      <option value="docsach">Đọc sách</option>
      <option value="ngu">Ngủ</option>
    </select>