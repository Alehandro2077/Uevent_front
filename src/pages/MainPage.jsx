import React from 'react';
import Axios from 'axios';

import SearchBar from "../components/SearchBar.jsx";
import Events from '../components/Events.jsx';
import Scroll from '../components/Scroll.jsx';
import MainpEventComponent from "../components/MainpEventComponent.jsx";

const MainPage = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const fetchGet = async () => {
      setLoading(true)
      try{
        const response = await Axios.get('http://localhost:5000/api/event/all', {withCredentials: true})
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
      <div class="mainWrapper">
        <SearchBar />
        <div class="flex-grow-1 ms-5 mt-3">
          {currentEvents.map((event) => <MainpEventComponent dataEvent={event}/>)}
        </div>
      </div>
      <Scroll setCurrentPage={setCurrentPage} currentPage={currentPage} eventsItem={events} setCurrentEvents={setCurrentEvents} />
    </main>
  );
}
export default MainPage;