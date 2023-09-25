import { useEffect, useState } from "react";
import HouseRow from "./houseRow";

const HouseList = ({ selectHouse }) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses"); //response = undefined
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 4,
        address: "Test",
        country: "USA",
        price: 10000000
      }
    ]);
  }

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} house={house} selectHouse={selectHouse} /> //alternative: house={house}
            // <tr key={house.id}>
            //   <td>{house.address}</td>
            //   <td>{house.country}</td>
            //   <td>{house.price}</td>
            // </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
