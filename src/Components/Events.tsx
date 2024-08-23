import { getEvents } from "../Services/EventService";
import { EventInterface } from "../Interfaces/EventInterface";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const res = await getEvents();
    setEvents(res);
  };

  return (
    <div>
      <h1>Events List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <strong>Timeslot ID:</strong> {event.timeslot_id}
            </div>
            <div>
              <strong>Track ID:</strong> {event.track_id}
            </div>
            <div>
              <strong>Discipline ID:</strong> {event.discipline_id}
            </div>
            <div>
              <strong>Minimum Duration:</strong> {event.minimumDuration} minutes
            </div>
            <div>
              <strong>Participant Gender:</strong> {event.participantGender}
            </div>
            <div>
              <strong>Participant Age Group:</strong>{" "}
              {event.participantAgeGroup}
            </div>
            <div>
              <strong>Maximum Participants:</strong> {event.maximumParticipants}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
