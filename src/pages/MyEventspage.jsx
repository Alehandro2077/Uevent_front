import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SearchBar from "../components/SearchBar.jsx";
import Scroll from "../components/Scroll.jsx";
import MyEventComponent from "../components/MyEventComponent.jsx";
import Axios from 'axios'

const MyEvents = () => {

  const [isLoading, setLoading] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    const fetchGet = async () => {
      setLoading(true)
      try{
        const response = await Axios.get('http://localhost:5000/api/event/myAll', {withCredentials: true})
        setEvents(response.data.events)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchGet();
  }, []);

    return isLoading ? <></> : (
      <main>
        <div class="container">
          <div class="row">
            <SearchBar />
            <div class="col-12  col-md-9">
              <div class="product">
                {
                  currentEvents.map((event) => <MyEventComponent dataEvent={event}/>)
                }
              </div>
            </div>
            <Scroll setCurrentPage={setCurrentPage} currentPage={currentPage} eventsItem={events} setCurrentEvents={setCurrentEvents} />
          </div>
        </div>
      </main>
    );
}
export default MyEvents;
