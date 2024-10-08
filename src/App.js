function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay"> 
        <div className="drawer"> 
          <h2>Корзина</h2>

          <div className="cartItem d-flex align-center">
            <img className="mr-20"  width={70} height={70} src="/img/sneaker/sneaker-1.jpg"/>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-plus.svg"/>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-between">
            <img width={40}  height={40} src="/img/logo.png"/>

              <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин лучшмх кроссовок</p>
              </div>
            </div>
            <ul className="d-flex">
              <li className="mr-30">
              <img width={18} height={18} src="img/vector-1.svg"/>
                <span>1205 руб.</span>       
              </li>
              <li>
              <img width={18} height={18} src="img/vector-2.svg"/>      
              </li>
            </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" />
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex">
          <div className="card ">
          <div className="favorite">
            <img src="/img/heart-disable.svg"/>
          </div>
            <img width={133} height={112} src="/img/sneaker/sneaker-1.jpg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/button.svg"/>
                </button> 
              </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="/img/sneaker/sneaker-2.jpg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/button.svg"/>
                </button> 
              </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="/img/sneaker/sneaker-3.jpg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/button.svg"/>
                </button> 
              </div>
          </div>

          <div className="card ">
            <img width={133} height={112} src="/img/sneaker/sneaker-4.jpg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/button.svg"/>
                </button> 
              </div>
          </div>
        </div>
        
      </div>
    </div>  
  );
}

export default App;
