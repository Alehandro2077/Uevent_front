import { Link } from "react-router-dom";
import Eventimg from "../img/Event.png";
import React from "react";
import Axios from "axios";

const SearchMain = ({dataEvent}) => {
    const { event_id, title, description, type, price, startDate, address, organiser_id, tickets_count, event_pic } = dataEvent
    const [orgName, setOrgName] = React.useState();
    const [isLoading, setLoading] = React.useState(false);
    const [typeS, setType] = React.useState('')


    React.useEffect(() => {
        const fetchGet = async () => {
            setLoading(true)
            try {
                const response = await Axios.get(`http://localhost:5000/api/organiser/inforg/${organiser_id}`, { withCredentials: true })
                setOrgName(response.data.info[0].title)
                console.log(response.data.info)
                if (type === 'master_class')
                    setType('Master class')
                if (type === 'training')
                    setType('Business training')
                if (type === 'discoveries')
                    setType('Discoveries')
                if (type === 'seminar')
                    setType('Seminar')
                if (type === 'concerts')
                    setType('Concert')
                if (type === 'festivals')
                    setType('Festival')

            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchGet();
    }, []);

    var month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    var d = new Date(`${startDate}`);
    var newDate = d.getDate().toString().padStart(2, '0') + ' ' + month[d.getMonth()]

    return isLoading ? <></> : (
        <div class="eventCompM p-3">
            <Link to={`/productOwerview/${event_id}`} className=" text-decoration-none text-black">
                <div class="d-flex ">
                    <h4>{title}</h4>
                    <p class="ms-auto">{newDate}</p>
                </div>
                <div class="d-flex">
                    <div class="eventImg flex-shrink-0">
                        <img src={event_pic ? `http://localhost:5000/api/avatar-pic/${event_pic}` : Eventimg} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div class="d-flex">
                            <h5>{orgName}</h5>
                            <h5 class="ms-auto">{price}$</h5>
                        </div>
                        <div class="d-flex">
                            <h5>{typeS}</h5>
                            <h6 class="ms-auto">{tickets_count} tickets</h6>
                        </div>
                        <h6>Description</h6>
                        <div class="flex-wrap">
                            {description}
                        </div>
                    </div>
                </div>
            </Link>
            <div class="d-flex justify-content-between">
                <h5>{address}</h5>
                <h6>sub count</h6>
            </div>
        </div>

    );
}

export default SearchMain