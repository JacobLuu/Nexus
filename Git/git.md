# 1. Phân biệt Git fetch và Git pull
# Git fetch: 
* Lệnh git fetch là một câu lệnh của git, được sử dụng để tải xuống các nội dung từ Remote repository mà không làm thay đổi trạng thái của Local repository
* Thu thập và lưu trữ những thay đổi mới từ các branch của Remote repository về máy tính của bạn, nhưng không hợp nhất chúng với Local repository
* Theo dõi các commit người khác đã cập nhật lên server, đồng thời nắm bắt được những thông tin khác nhau giữa remote và local.

# Git pull:
* Là lệnh hợp nhất các thay đổi từ Remote repository vào Local repository.
* Là sự kết hợp của 2 lệnh Git Fetch và Git Merge. Giai đoạn đầu, Git Pull sẽ thực thi lệnh Git Fetch ở phạm vi nhánh cục bộ mà HEAD được trỏ đến. Khi dữ liệu được tải xuống, Git Pull sẽ bắt đầu quy trình hợp nhất như Git Merge. Một merge commit mới sẽ được tạo và HEAD cũng được cập nhật để trỏ đến merge commit đó.
# So sánh: 
* **Git Fetch** thường được coi là một phiên bản an toàn hơn của **Git Pull**.
* **Git fetch** thường được dùng trong trường hợp có nhiều người làm việc trên cùng một nhánh. Còn **git pull** chỉ nên sử dụng khi có một người làm việc trên nhánh để hạn chế xung đột.

# 2. Git merge và Git rebase
## Git merge:
* **Merge** để tích hợp 2 nhánh với nhau, câu lệnh merge sẽ lấy snapshot mới nhất của mỗi branch rồi combine với nhau để tạo ra một merge commit.
* **Merge** để nối feature vào thì nó sẽ gần giống với hình xương cá, hay nói cách khác dù có cùng gắn nhiều feature cũng sẽ cứ theo tuần tự gắn và sẽ có các mấu đốt mới. Khi đó history của repo sẽ không bị phá mất.
* **Vậy khi nào cần dùng merge** : Nếu muốn lưu vết hay bảo toàn được history của repo ( Vd như xem được commit này từ branch nào ) và tránh đươc trường hợp rewrite lại tất cả các changes
## Git rebase:
* Khi tích hợp vào nhánh master , Git rebase sẽ copy tất cả các changes từ nhánh feature đặt lên đầu của master . Có thể hiểu là nó lấy tất cả các commit từ lúc chúng ta tách nhánh feature từ master rồi đem từng commit đó đặt lên master theo đúng thứ tự.
* **Rebase** thì hình dáng history sẽ thanh thoát hơn , sẽ chỉ là một đường thẳng đẹp đẽ nhưng nếu chúng ta không đặt đúng thứ tự thì sẽ dẫn đến fail bất cứ lúc nào.
* **Vậy khi nào cần dùng rebase** : Khi muốn một history rõ ràng dễ nhìn, hay còn gọi là linear history và tránh được trường có thêm các merge commit.

# 3. Remote
* Lệnh git remote cho phép bạn tạo, xem và xóa kết nối giữa các Repo. Những kết nối chứa thông tin địa chỉ đến kho chứa khác, nó có một cái tên để sử dụng khi cần thiết.
* Để liệt kê các liên kết sử dụng lệnh
    >git remote
* Tạo một liên kết:
    >git remote add remote-name url
* Xóa một địa chỉ remote:
    >git remote rm remote-name
* Đổi tên địa chỉ remote
    >git remote rename ten-cu ten-moi
* Xem thông tin về Remote
    >git remote show origin

# 4. Git reset –soft, mixed và hard
* **Git reset-mixed**: Di chuyển HEAD về vị trí commmit reset và vẫn giữ nguyên tất cả các thay đổi của file, nhưng loại bỏ các thay đổi khỏi stage.
    >$ git reset <commit_id>
* **Git reset-soft**: Lệnh này chỉ di chuyển HEAD về vị trí commit. Trạng thái của stage và tất cả sự thay đổi của file sẽ được giữ nguyên.
    >$ git reset --soft <commit_id>
* **Git reset-hard**: Di chuyển con trỏ HEAD về vị trí commmit reset và loại bỏ tất cả sự thay đổi của file sau thời điểm commit reset.
    >$ git reset --hard <commit_id>
