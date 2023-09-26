import loadingStatus from "@/helpers/loadingStatus";
import HouseRow from "./houseRow";
import useHouses from "@/hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";

const HouseList = () => {
  const { houses, setHouses, loadingState } = useHouses();

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
      (loadingState !== loadingStatus.loaded) ? (
      <LoadingIndicator loadingState={loadingState} />
      ) : (
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
              <HouseRow key={house.id} house={house} />
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
          Add
        </button>
      </>
      )
  );
};

export default HouseList;
