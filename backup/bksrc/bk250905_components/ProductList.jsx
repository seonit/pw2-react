import { useState } from 'react';
import ProductDetail from './ProductDetail.jsx';
import './ProductList.css';

function ProductList() {
  const products = [
    {id: 0, tittle: '바지', info: '좋은 바지', price: 10000, img: 'https://picsum.photos/id/46/3264/2448'},
    {id: 1, tittle: '티셔츠', info: '좋은 티셔츠', price: 5000, img: 'https://picsum.photos/id/9/5000/3269'},
    {id: 2, tittle: '양말', info: '좋은 양말', price: 1000, img: 'https://picsum.photos/id/7/4728/3168'},
  ];

  const [selectedItem, setSelectedItem] = useState(false);
  
  const [propsProduct, setPropsProduct] = useState({});

  const viewModal = (item) => {
    setPropsProduct({...item});
    setSelectedItem(true);
  }

  return (
    <>
     {selectedItem && <ProductDetail product={propsProduct} setSelectedItem={setSelectedItem}></ProductDetail> }
    <div className="card-container">
    {
      products.map(item => {
        return(
          <div className="card" key={item.id} onClick={() => {viewModal(item) }} >
            <div className="card-img" style={{backgroundImage: `url('${item.img}'`}}></div>
              <p className="card-title">{item.tittle}</p>
              <p className="card-price">{item.price}</p>
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default ProductList;