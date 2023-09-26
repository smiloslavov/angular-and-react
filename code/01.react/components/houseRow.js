const HouseRow = ({ address, country, price }) => { //alternative { house }
  return (
    <tr>
      <td>{address}</td>
      <td>{country}</td>
      {price && (
        <td className={`${price >= 500000 ? "text-primary" : ""}`}>
          {price}
        </td>
      )}
    </tr>
  );
};

export default HouseRow;