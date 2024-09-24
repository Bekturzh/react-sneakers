function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card ">
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
