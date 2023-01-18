import { useEffect, useState } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchdata } from "./fetchdata"

function Header() {
    return (
        <header className="hero is-dark has-text-centered">
          <div className="hero-body">
            <p className="title">
              日本円で世界の通貨を購入してみませんか
            </p>
          </div>
        </header>
    );
  }
  
  
  const colorWhite = {
    color: "white"
  }
  function Main() {
    const [data,setData]=useState(null)
    const handleChange=(e)=>{
      const target=e.target.value
      fetchdata(target).then(setData)
    }

    console.log(data)
    return (
      <main>
        <div className="contentsall has-background-link-light">
          <div className='content has-text-centered '>
            <h3>100円を基準に表示します。</h3>
          </div>
          <section className="buttons">
              <button className="button is-primary is-focused has-text-centered" value='USD' onClick={handleChange}>USD:米ドル</button>
              {/* <button className="button is-info is-focused has-text-centered" value='GBP' onClick={handleChange}>GBP:イギリスポンド</button> */}
              <button className="button is-link is-focused has-text-centered" value='CAD'onClick={handleChange}>CAD:カナダドル</button>
              <button className="button is-info is-focused has-text-centered" value='EUR'onClick={handleChange}>EUR:ユーロ</button>
              <button className="button is-success is-focused has-text-centered" value='PHP'onClick={handleChange}>PHP:フィリピンペソ</button>
              <button className="button is-warning is-focused has-text-centered" value='AUD' onClick={handleChange}>AUD:オーストラリアドル</button>
              <button className="button is-danger is-focused has-text-centered" value='HKD' onClick={handleChange}>HKD:香港ドル</button>
              <button className="button is-dark is-focused has-text-centered" value='KRW'onClick={handleChange}>KRW:韓国ウォン</button>
              {/* <button className="button is-warning is-focused has-text-lefted" value='NZD'onClick={handleChange}>NZD:ニュージーランドドル</button> */}
              {/* <button className="button is-black is-focused has-text-centered" value='JPY'onClick={handleChange}>JPY:日本円</button>  */}
          </section>

          <div className="textarea has-background-link-light has-text-centered is-text-white">
            <div className="container">
              <h1>
                {data&&(<div className='$light'>{"100JPYで"}</div>)}
                {data&&(<div className='$light'>{(data.conversion_rate)*100+data.target_code+"買うことが可能です。"}</div>)}
              </h1>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>世界の為替レート変換サイト</p>
          <p>日本大学文理学部情報科学科<br></br>5420025 山城昂平</p>
          <p>
            <a href="https://www.exchangerate-api.com/">exchangerate-apiのホームページ</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;