function bai1(string){
    // check xem có phải chuỗi không?
    if(typeof string != "string" && string.length ===0){
        return "Vui lòng nhập vào 1 chuỗi!";
    }
    // Xóa khoảng trắng 2 bên
    var xoakhoangtrang = string.trim();
    // Duyệt từng phần tử cửa chuỗi và cho vào 1 mảng 
    var arr =[];
    for (var value of xoakhoangtrang){
        arr.push(value);
    }
    // dùng map để duyệt từng phần tử trong mảng và viết hoa chữ cái ở vị trí index = 0
    var new_arr = arr.map(function(value,index){
        if(index ===0){
            return value.toUpperCase();
        }
            return value.toLowerCase();
    });
   return new_arr.join("");
}

let a = bai1("my name is Jacob");
console.log(a); // My name is jacob