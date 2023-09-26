import Banner from './banner';
import House from './house';
import HouseList from './houseList';
import { useState } from "react";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectHouseWrapper = (house) => {
        //check if house is valid
        setSelectedHouse(house);
    }

    return (
        <div>
            <Banner>
                Longer setneces content.
            </Banner>
            { selectedHouse ? (
                <House house={selectedHouse} />
            ) : (
                <HouseList selectHouse={setSelectHouseWrapper} />
            )}
        </div>
    );
}

export default App;