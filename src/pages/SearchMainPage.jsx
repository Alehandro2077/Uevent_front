import React from 'react';
import Axios from 'axios';

import SearchBar from "../components/SearchBar.jsx";
import Events from '../components/Events.jsx';
import Scroll from '../components/Scroll.jsx';
import SearchMain from "../components/SearchMain.jsx";
import { useParams } from 'react-router-dom';

const SearchMainPage = () => {
    const {title} = useParams()
    const [isLoading, setLoading] = React.useState(false);
    const [events, setEvents] = React.useState([]);
    const [currentEvents, setCurrentEvents] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);

    console.log(title)

    React.useEffect(() => {
        const fetchGet = async () => {
            setLoading(true)
            try {
                const response = await Axios.get(`http://localhost:5000/api/event/search/${title}`, { withCredentials: true })
                setEvents(response.data.events)
                console.log(response.data.events)
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
                    {currentEvents.map((event) => <SearchMain dataEvent={event} />)}
                </div>
            </div>
            <Scroll setCurrentPage={setCurrentPage} currentPage={currentPage} eventsItem={events} setCurrentEvents={setCurrentEvents} />
        </main>
    );
}

export default SearchMainPage