import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';
import Axios from 'axios';

const SuccessPay = () => {
    const location = useLocation();

    const event_id = new URLSearchParams(location.search).get('event_id')
    const tickets_count = new URLSearchParams(location.search).get('tickets_count')
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchGet = async () => {
          setLoading(true)
          try{
            const response = await Axios.patch(`http://localhost:5000/api/event/minusTicket`, {event_id, tickets_count}, {withCredentials: true})
          } catch (err) {
            console.error(err)
          } finally {
            setLoading(false)
          }
        }
        fetchGet();
      }, []);
    return isLoading ? <></> : (
        <div class=" text-center">
            <h1>Ticket successful payed</h1>
            <Link class="myButton text-decoration-none" to={"/main"}>Back to events</Link>
        </div>
    )
}

export default SuccessPay;