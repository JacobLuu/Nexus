function number(num){
    //check xem có phải số và mảng có rỗng không?
    for(var value of num){
            if ( !Number.isInteger(value) && num.length === 0 ){
                return "Vui lòng nhập vào một dãy số!"
            }
    }
    // Loại bỏ các phần tử trùng 
    var remove = new Set(num);
    // Sắp xếp theo thứ tự trước khi tách chẵn lẻ 
    var newArr = [...remove];
    newArr.sort(function(a,b){
        return a-b;
    });
    //Tách chuỗi và phân chia chẵn lẻ 
    var mangchan=[];
    var mangle =[];
    newArr.forEach(function(item){
        if(item %2== 0){
            return mangchan.push(item);
        } else{
            return mangle.push(item);
        }
    });
    //nối mảng
    return [... mangle,... mangchan];
}

var a = [3,4,8,5,3,6,7,19];
console.log(number(a));