import logo from './logo.svg';
import './App.css';
import List from './List';
import doublePi, {pi as pie, add} from './myMath';
import Card from './card';

function App() {
  const num = Math.floor(Math.random()*10);
  const name = "Kk";
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const image = "https://picsum.photos/200";

  const customStyle = {
    color: "red",
    fontSize: "20px",

  };
  if(num > 5){
    customStyle.color = "green";
  }
  return (

    <div>
      <Card img={image} name="Harry Styles" phone="No sé"/>
      <Card img={image} name="Timothee Chalamet" phone="Ojalá supiera"/>
      <Card img={image} name="Nombre ajá" phone="tututu tutu tu"/>
      <h1 style = {customStyle}>Holi {name + " "}</h1>
      <h1>The year is {year}</h1>
      <h1 style = {customStyle}>The number is { num } </h1>
      <List></List>
      <h1>A random number is { Math.floor(Math.random()*10) } </h1>
      <img src={image + "?grayscale"}></img>
      <h4>The value of pi is {pie}</h4>
      <h4>The double of pi is {doublePi()}</h4>
      <h4>The sum of {pie} and {num} is {add(pie, num)}</h4>
    </div>

  );
}

export default App;
