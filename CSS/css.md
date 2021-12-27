1. Phân biệt các kiểu position:
- Thuộc tính Position xác định loại phương thức định vị được sử dụng cho một phần tử.
- Position có 5 giá trị:
    + Static
    + Relative
    + Fixed
    + Absolute
    + Sticky
- Position (static) : Đây là giá trị hiển thị mặc định của position. Nó không bị ảnh hưởng bởi các thuộc tính như left, right, top, bottom.
- Position (relative) : Xác định vị trí tuyệt đối của của thành phần, khi sử dụng thuộc tính này chúng ta sẽ sử dụng kèm với các giá trị left, right, top, bottom, và bạn chỉ có thể sử dụng nhiều nhất 2 giá trị lền kề nhau ví dụ như (bottom, left), (left, top), (top, right), (right, bottom).

Lưu ý: thuộc tính position (relative)  sẽ không làm thay đổi tới việc hiển thị ban đầu.
Example: 
        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: relative;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>   

- Position (absolute) : Xác định vị trí tương đối theo thẻ cha có thuộc tính là position(relative)  nếu thẻ cha không phải là  position(relative) thì nó sẽ được xác đinh theo thẻ body của trang web.

Lưu ý: thuộc tính position(absolute) sẽ làm thay đổi tới việc hiển thị ban đầu

Example: 
        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: absolute;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>   
- Position(fixed) : Xác định vị trí tương đối cho cửa sổ trình duyệt, có nghĩa là nó luôn ở một vị trí ngay cả khi trang được cuộn. Nó dùng các thuộc tính left, right, top, bottom để xác định vị trí. Ứng dụng điển hình của nó có thể kể ra như giữ thanh menu của các trang web không bị mất đi khi cuộn xuống xem các nội dung khác.
Example: 
        <div>
            <div style="background-color: red;height: 60px; width: 60px;border: 1px solid;"></div>
            <div style="background-color: yellow;height: 60px; width: 60px;border: 1px solid;position: fixed;top:60px;left: 280px;"></div>
            <div style="background-color: green;height: 60px; width: 60px;border: 1px solid;"></div>
        </div>  

- Position(sticky) : Được toggle giữa relative và fixed khi người dùng cuộn đến vị trí được set theo top, left, bottom, right thì position sẽ được đổi thành fixed.