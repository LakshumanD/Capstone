import { Box, Button } from "@material-ui/core";
import TopBanner from "../UI/TopBanner";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Booking.css";
import { useState } from "react";
import BookingButton from "./BookingButton";
import BookedMovie from "./BookedMovie";
import BookedSeats from "./BookedSeats";
import BookedSeatsDetails from "./BookedSeatsDetails";
const Booking = () => {
  const [avlSeats, setAvlSeats] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/MapTheater/byID`, {
        params: {
          ID: id,
        },
      })
      .then((resp) => {
        setData(resp.data);
        //   console.log(resp.data);
        setAvlSeats(resp.data.AvlSeats);
      });
  };
  const [data, setData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    const price = 160.0;
    var currency = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(selectedSeats.length * price);
    const CurDate = new Date().toString().split(" ");
    const details = {
      Seats: selectedSeats,
      MovieName: data.Movies.Name,
      TheaterName: data.Theater.Name,
      MovieTime: `${CurDate[1]}, ${CurDate[0]}  ${CurDate[2]} ${data.Time}`,
      TotalAmount: currency,
    };
    sessionStorage.setItem("data", JSON.stringify(details));
    console.log(details);
    navigate("/booked");
  };

  useEffect(async () => {
    fetchData();
  }, []);
  const Seats = {
    1: "A1",
    2: "A2",
    3: "A3",
    4: "A4",
    5: "A5",
    6: "A6",
    7: "A7",
    8: "A8",
    9: "A9",
    10: "A10",
    11: "B1",
    12: "B2",
    13: "B3",
    14: "B4",
    15: "B5",
    16: "B6",
    17: "B7",
    18: "B8",
    19: "B9",
    20: "B10",
    21: "C1",
    22: "C2",
    23: "C3",
    24: "C4",
    25: "C5",
    26: "C6",
    27: "C7",
    28: "C8",
    29: "C9",
    30: "C10",
    31: "D1",
    32: "D2",
    33: "D3",
    34: "D4",
    35: "D5",
    36: "D6",
    37: "D7",
    38: "D8",
    39: "D9",
    40: "D10",
    41: "E1",
    42: "E2",
    43: "E3",
    44: "E4",
    45: "E5",
    46: "E6",
    47: "E7",
    48: "E8",
    49: "E9",
    50: "E10",
    51: "F1",
    52: "F2",
    53: "F3",
    54: "F4",
    55: "F5",
    56: "F6",
    57: "F7",
    58: "F8",
    59: "F9",
    60: "F10",
  };

  return (
    <TopBanner>
      <Box component="form" autoComplete="off">
        <div className="buttons">
          {[...Array(avlSeats)].map((item, index) => (
            <BookingButton
              key={index}
              className={
                selectedSeats.includes(Seats[index + 1])
                  ? "available activete"
                  : "available"
              }
              selectedSeats={selectedSeats}
              value={Seats[index + 1]}
              setSelected={setSelectedSeats}
            />
          ))}
        </div>
        <div className="showseat">
          <div className="details">
            {data && data.Movies && data.Theater && <BookedMovie data={data} />}
          </div>

          <div className="detailsright">
            {data && data.Movies && data.Theater && (
              <h3 style={{ color: "#bdbdbd" }}>Seats</h3>
            )}

            {data && data.Movies && data.Theater && (
              <div className="seats">
                <BookedSeats Seats={selectedSeats} />
              </div>
            )}

            {data && data.Movies && data.Theater && (
              <div className="seatsdetail">
                <BookedSeatsDetails Seats={selectedSeats} />
              </div>
            )}
          </div>
        </div>
        <div className="but">
          <Button variant={"contained"} onClick={submitHandler}>
            CONTINUE
          </Button>
        </div>
      </Box>
    </TopBanner>
  );
};
export default Booking;
