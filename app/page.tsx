import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { events } from '@/lib/constants';

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub For Every <br /> Event You Can't Miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and Conferences, All in One Place!
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events.map((event, index) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
