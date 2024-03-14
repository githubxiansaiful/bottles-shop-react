import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch("bottles.json")
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);

    return (
        <div className="container">
            <div className="mt-10">
                <h1>Bottles: {bottles.length}</h1>
                <div className="grid grid-cols-3 gap-5">
                    {
                        bottles.map(bottle => <Bottle
                            key={bottle.id}
                            bottle={bottle}
                        ></Bottle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bottles;