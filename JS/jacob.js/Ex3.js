function check(arr) {
    // Check input is Array
    if (arr.length === 0) {
      return "Chuỗi phải có ít nhất 1 phần tử";
    }
    // Kiểm tra kiểu dữ liệu
    const checktype = arr.some(function(item) {
      return typeof item != "boolean";
    });
    if (!checktype) {
      return arr.reduce((a, b) => {
        return a === b;
      });
    }
  }
  var m = [true, true, true];
  console.log(check(m));