import { useState } from "react";

import { PropComponent } from "./components/PropComponent";



export const App = () => {
  // Example of Reactive Data using react Hook useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Diego Zito");
  const [age , setAge] = useState(0);
  const [country , setCountry] = useState("Sweden");
  const [pizza , setPizza] = useState(false);
  const [cards , setCards] = useState([]);

  // Function expression to showcase reactiveData in action
  const addOne = () => setCount((count) => count + 1);

  // Function expression to handle the input change and update the 'name' state to showcase how reactive data works in React through the use of hooks
  const handleNameUpdate = () => {
    const newName = prompt("Enter a new name:"); // Show an alert to receive a value from the user
    if (newName) {
      setName(newName); // Update the name state with the new name if a value is provided
    }
  };
  const handleAge = ()=>{
    const newAge = prompt("Enter your age:");
    {newAge ? setAge(newAge) : setAge}

  }
  const handleCountry = ()=>{
    const newCountry = prompt("Enter your country:");
    {newCountry ? setCountry(newCountry) : setCountry}

  }
  const FavPizza = ()=>{
    const likePineapplePizza = prompt("Do you like pineapple pizza? yes or No");
    {likePineapplePizza === "yes" ?  setPizza(true) : setPizza(false)}

  }

  
  


  // Staticc Data Inyected through {} reference

  return (
    <>
      {/* Component Example */}
      
     
 
      <div className="card">
      
        <button onClick={addOne}>count is {count}</button>
        <hr />
    
        <h3>your name is :{name}</h3>
        <button onClick={handleNameUpdate}>Change Name</button>
        <hr />

        <h3>you are {age} years old</h3>
        <button onClick={handleAge}>Change age</button>
         <hr />
         <h3>your country is {country}</h3>
        <button onClick={handleCountry}>Change Country</button>
        <hr />
         <h3>your favourite pizza is pineapple pizaa ? {pizza ? "yes" : "No" }</h3>
        <button onClick={FavPizza}>Change favourite Pizza</button>
        <hr />
        <button onClick={()=>{
          setCards((cards) => [<PropComponent key={name} name={name} age={age} birthplace={country} likesPizza={pizza}/>, ...cards ])
        }}>Generate a card</button>
        
      </div>
      
      <div>
        <hr />
        {cards}
        <hr />
        <PropComponent
          name="Diego"
          age={32}
          birthplace="Valencia, Venezuela"
          likesPizza={true}
        />
        <PropComponent
          name="Matilda"
          age={32}
          birthplace="Kalmar, Sweeden"
          likesPizza={false}
        />
        <PropComponent
          name="Theres"
          age={34}
          birthplace="Landvetter, Sweeden"
          likesPizza={false}
        />
    
        
      
        <PropComponent 
          name="Jennie"
          age={35}
          birthplace="Kalmar, Sweeden"
          likesPizza={false}
        />
      </div>
    </>
  );
};
