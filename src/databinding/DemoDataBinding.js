import React, { Component } from 'react';

class DemoDataBinding extends Component {
  fullname = "Henry";
  age = 22;
  // Tạo hàm như bình thường, vì nó là class nên không cần khai báo function
  showInfor(){
    const email = "Thailnp133@gmail.com";
    return this.fullname +' '+ this.age+" " + email;
  }
  showMessege(){
    alert("Hello word");
  }

  showMessege2(messege){
    alert(messege);
  }
  // Errow function sẽ không có con trỏ this, vì thế nó sẽ lun lấy this của thằng cha
  showMessege3 = ()=>{
    alert(this.fullname);
  }
  render() {
    return (
      <div>
         <h1>{this.fullname}</h1>
         <h2>{this.age}</h2>
         <h3>{this.showInfor()}</h3>
         {/* Không được involk hàm, vì lúc đó React sẽ nghĩ là gọi hàm */}
         <button onClick={this.showMessege}>Submit</button>
         {/* Để tránh bị gọi hàm khi mới render giao diện thì nên bọc 1 hàm bên ngoài (hàm giả) */}
         <button onClick={()=>{
          this.showMessege2("hellooooooooooooooo!");
         }}>Submit 2</button>
         <button onClick={this.showMessege3}>Submit 3</button>
      </div>
    );
  }
}

export default DemoDataBinding;