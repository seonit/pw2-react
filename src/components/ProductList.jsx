import './ProductList.css';

function ProductList() {
  const products = [
    {id: 0, tittle: '바지', info: '좋은 바지', price: 10000, img: 'https://picsum.photos/id/46/3264/2448'},
    {id: 1, tittle: '티셔츠', info: '좋은 티셔츠', price: 5000, img: 'https://picsum.photos/id/9/5000/3269'},
    {id: 2, tittle: '양말', info: '좋은 양말', price: 1000, img: 'https://picsum.photos/id/7/4728/3168'},
  ]
  
  return (
    <div className="card-container">
    {
      products.map(product => {
        return(
          <div className="card" key={product.id}>
            <div className="card-img" style={{backgroundImage: `url('${product.img}'`}}></div>
              <p className="card-title">{product.tittle}</p>
              <p className="card-price">{product.price}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default ProductList;