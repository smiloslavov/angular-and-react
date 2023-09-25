import HouseRow from "./houseRow";

const HouseList = () => {

  const houses = [
    {
      "id": 1,
      "address": "12 Valley of Kings, Geneva",
      "country": "Switzerland",
      "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
      "price": 900000,
      "photo": "277667"
    },
    {
      "id": 2,
      "address": "89 Road of Forks, Bern",
      "country": "Switzerland",
      "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
      "price": 500000,
      "photo": "462358"
    },
    {
      "id": 3,
      "address": "Grote Hof 12, Amsterdam",
      "country": "The Netherlands",
      "description": "This house has been designed and built to an impeccable standard offering luxurious and elegant living. The accommodation is arranged over four floors comprising a large entrance hall, living room with tall sash windows, dining room, study and WC on the ground floor.",
      "price": 200500,
      "photo": "259600"
    }
  ];

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
            <HouseRow key={house.id} {...house} /> //alternative: house={house}
            // <tr key={house.id}>
            //   <td>{house.address}</td>
            //   <td>{house.country}</td>
            //   <td>{house.price}</td>
            // </tr>
          ))}
        </tbody>
      </table>
      {/* <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button> */}
    </>
  );
};

export default HouseList;
