import TopBanner from "../UI/TopBanner";
import { Box } from "@material-ui/core";
const Booked = () => {
  const detData = JSON.parse(sessionStorage["data"]);

  return (
    <TopBanner>
      <Box
        component="form"
        autoComplete="off"
        style={{ width: "25%", margin: "2px auto" }}
      >
        <h5>The below ticket has been booked successfully....</h5>
        <h1>Booked History:</h1>
        <table>
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }}>Movie</td>
            <td>{detData.MovieName}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }}>Theater</td>
            <td> {detData.TheaterName}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }}>Seats</td>
            <td> {detData.Seats.join(",")}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }}>
              Movie Time
            </td>
            <td>{detData.MovieTime}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }}>Price</td>
            <td>{detData.TotalAmount}</td>
          </tr>
        </table>
      </Box>
    </TopBanner>
  );
};
export default Booked;
