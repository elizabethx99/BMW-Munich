function Buttons ({filteredCars}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredCars("2 series")}>2 Series</button>
            <button className="change" onClick={() => filteredCars("3 series")}>3 Series</button>
            <button className="change" onClick={() => filteredCars("4 series")}>4 Series</button>
            <button className="change" onClick={() => filteredCars("5 Series")}>5 Series</button>
            <button className="change" onClick={() => filteredCars("SUV")}>SUV</button>
            <button className="change" onClick={() => filteredCars("M Cars")}>M Cars</button>
        </div>
    )
}

export default Buttons;