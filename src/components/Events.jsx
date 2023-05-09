import React from 'react';
import '../App.css'
import EventComonent from './EventComponent.jsx';

class Events extends React.Component
{   
    render()
    {
        return (
          <div class="col">
            <div class="product">
              <div class="col">
                <EventComonent />
                <EventComonent />
                <EventComonent />
                <EventComonent />
                <EventComonent />
                <EventComonent />
              </div>
            </div>
          </div>
        );
    }
}
export default Events;