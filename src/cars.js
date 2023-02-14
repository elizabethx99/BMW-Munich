import "./App.css";

function Cars ({carsList}){
    return(
        <div className="car">
            {carsList.map((element => {
                const {id, name, searchTerm, price, image} = element;
                return(
                    <div className="car-card" key={id}>
                        <img src= {image} width="700px" alt="cars"/>
                        <div className="car-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Cars;