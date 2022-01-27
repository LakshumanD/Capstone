import BookingCalender from "../Booking/BookingCalender";
import ItemTheater from "../Booking/ItemTheater";
import TopBanner from "../UI/TopBanner";
import TopPanel from "./TopPanel";
import { useParams } from "react-router-dom";
const Viewdata = (props) => {
  const { id } = useParams();
  return (
    <TopBanner>
      <TopPanel argData={id} />
      <BookingCalender />
      <ItemTheater argData={id} />
    </TopBanner>
  );
};
export default Viewdata;
