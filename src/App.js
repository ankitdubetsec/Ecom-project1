import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Nav from './components/navbar'
import Hero from './components/hero'
import Card from './components/Card'
import Carddata from './components/data'
function App() {
  
    const cards=Carddata.map(item =>{
      
      return (
        <Card
        key={item.id}
        item={item}
        
        // img={item.img}
        // rating={item.rating}
        // reviewCount="6"
        // distance={item.distance}
        // date={item.date}
        // price={137}
        // location={item.location}
        // spots={item.spots}
        // mode={item.mode}
        />
      )
    })
    return (
    <div className='container'>
      <Nav/>
      <Hero/>
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
