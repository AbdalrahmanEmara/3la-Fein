import DiscoverCards from "./discoverCards/discoverCards";
import Style from './discoverWeekly.module.css'



function DiscoverWeekly(places){
    return(
        <div className={Style.discoverWeekly}>
            <div style={{width: '100%'}}>
                <p className={Style.discoverTitle}>Discover Weekly</p>
                <p className={Style.discoverDescription}>An enim nullam tempor sapien gravida donec enim ipsum</p>
            </div>
            
            {places.places.map((place) => <DiscoverCards className={Style.discoverCard} name= {place.name}
                    image={place.image}
                    category={place.category}
                    rating={place.rating}
                    visitors={place.visitors}
                    isOpen={place.isOpen}
                    openDate={place.openDate}
                    id={place.id} />)}
        </div>
    );
}

export default DiscoverWeekly;