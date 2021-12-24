import BookingCalender from "../Booking/BookingCalender";
import ItemTheater from "../Booking/ItemTheater";
import TopBanner from "../UI/TopBanner";
import TopPanel from "./TopPanel";

const Viewdata = (props) => {
  return (
    <TopBanner>
      <TopPanel />
      <BookingCalender />
      <ItemTheater />
    </TopBanner>
  );
};
export default Viewdata;
