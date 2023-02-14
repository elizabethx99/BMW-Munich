import {useState} from "react";
import {data} from './data2';
import './App.css';

function MPower () {

    const [photo, setPhoto] = useState(0);
    const {id, image, text} = data[photo];
    const [showMore, setShowMore] = useState(false);



    const nextPhoto = () => {
        setPhoto((photo) => {
            photo ++;
            if (photo > data.length -1){
                photo = 0;
            }
            return photo;
            
        })
    }
    const previousPhoto = () => {
        setPhoto((photo) => {
            photo --;
            if (photo < 0){
                return data.length -1;
            }
            return photo;
        })
    }



    return(<div className="background">
        <div className="cont">
            <img src={image}/>
        </div>
        <div className="btn-container">
            <button className="btn-one" onClick= {previousPhoto}>Previous</button>
            <button className="btn-two" onClick={nextPhoto}>Next</button>
        </div>
        <div className="aboutText">
            <p>{showMore ? text : text.substring(0, 170) + "..."}
            <button className="btn-three" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
            </p>
        </div>

        
    </div>
    )
}

export default MPower;