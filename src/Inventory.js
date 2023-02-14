import {useState} from "react";
import {data} from "./data";
import Cars from "./cars";
import Buttons from "./buttons";

function Inventory () {

  const [cars, setCars] = useState(data);

  const chosenCars = (searchTerm) => {
    const newCars = data.filter(element => element.searchTerm === searchTerm);
    setCars(newCars);
  }

  return(<div>
    <Buttons filteredCars={chosenCars}/>
    <Cars carsList = {cars}/>
    </div>
  )

  
}

export default Inventory;