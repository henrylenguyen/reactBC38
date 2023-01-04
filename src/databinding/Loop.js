import React, { Component } from 'react'

export default class Loop extends Component {
  products = [
    {id: 1,name: "Iphone 14",price: 1000},
    {id: 2,name: "Samsung ZFlip 4",price: 800},
    {id: 3,name: "Xiaomi",price: 7000}
  ]
  renderProducts(){
    const htmlArr = this.products.map((item)=>{
      return (
        <tr key={item.id}>
           <th>{item.id}</th>
           <th>{item.name}</th>
           <th>{item.price}</th>
     
        </tr>
      );
    })
    // for (let item of this.products) {
    //   let trTag = (
    //     <tr>
    //       <th>{item.id}</th>
    //       <th>{item.name}</th>
    //       <th>{item.price}</th>
    //     </tr>
    //   );
    //   htmlArr.push(trTag);
    // }
    // return htmlArr;
  }
  render() {
    return (
      <div>
       <h1>Danh sách sản phẩm</h1>
       <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên SP</th>
            <th>Giá SP</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProducts()}
        </tbody>
       </table>
      </div>
    )
  }
}
