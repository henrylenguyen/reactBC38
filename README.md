# Bài 2: Chọn lựa kính áp dụng State
## Mô tả:
 - Bài làm được phân tách theo nhiều component và áp dụng cả props
 - Chuyển state và setState sang useState
 
 ## Công thức của useState: 
 ```
const [state, setState] = useState(initial value)
```
Trong đó: 
  - **state** và **setState**ó thể đặt tên bất kì, ví dụ: car,setCar....
  - **setState** là 1 callback sẽ làm thay đổi state ban đầu
  - **initial value** là giá trị khởi tạo, nó là giá trị ban đầu được gán vào **state** khi render lần đâu.
      **Initial value** có thể là number,object,string,array,... hoặc 1 function, nếu là function nó sẽ nhận giá trị khởi tạo là giá trị trả về của function đó **(return)**


 useState ngắn gọn hơn state thông thường, nhưng nó chỉ được áp dụng bởi function component
 
 
 ## Demo về sản phẩm:
 ![image](https://user-images.githubusercontent.com/114068860/210735113-84e31da4-fb34-4cf0-8180-d96b0206a4b5.png)
### Mô tả:
 - Bạn chọn những Mắt Kính ở phía dưới sẽ được update tự động qua hình bên trái
 - Bao gồm: giá sản phẩm, hình sản phẩm, chi tiết sản phẩm, tên sản phẩm
 - Bạn rê chuột vào hình sản phẩm mới xem được chi tiết.
