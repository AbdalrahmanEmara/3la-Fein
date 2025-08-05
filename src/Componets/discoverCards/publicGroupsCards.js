import { Link } from "react-router-dom";
import Style from './discoverCards.module.css';




function PublicGroupsCards(publicGroups) {
    const circle = (LEFT) => {
        return(
            <svg style={{position: 'absolute', left: LEFT}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <rect x="0.5" y="0.5" width="20" height="20" rx="10" fill="#E6E8EC"/>
                <rect x="0.9" y="0.9" width="19.2" height="19.2" rx="9.6" stroke="black" stroke-opacity="0.06" stroke-width="0.8"/>
            </svg>
        );
    }

    const LEFT = ['0px', '14px', '28px', '42px'];
    return(
        <div className={Style.publicGroupsCards}>
            <Link to='/'><img className={Style.groupImage} src={publicGroups.image} /></Link>
            <div className={Style.publicGroupsCardsDiv}>
                <div className={Style.publicGroupsCardsDiv1}>
                    <p style={{font: '500 16px "Poppins"', margin: '8px 0px'}}>{publicGroups.name}</p>

                    <p style={{font: '400 12px "Poppins"', color: '#353945', margin: '0px'}}>{publicGroups.category}</p>

                    <div className="d-flex align-items-center" style={{height: '20px', margin: '8px 0px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26769 0.771504L8.34956 2.90038L10.7783 3.24313C11.9161 3.40365 12.4362 4.80771 11.5591 5.63743L9.81456 7.28626L10.2251 9.60958C10.4354 10.7998 9.17219 11.5991 8.17749 11.0923L5.99989 9.98149L3.82294 11.0919C2.82677 11.6004 1.56462 10.7984 1.77462 9.60963L2.18521 7.28626L0.440938 5.63766C-0.436791 4.80734 0.0851323 3.40358 1.22135 3.24315L3.6503 2.90036L4.73271 0.771504C5.25549 -0.257123 6.745 -0.257213 7.26769 0.771504Z" fill="#F6C92D"/>
                        </svg>
                        <span className={Style.rating}>&nbsp;{publicGroups.rating}</span>
                        <span style={{font: '600 12px "Poppins"', color: '#777E90'}}>&nbsp;({publicGroups.visitors})</span>
                    </div>

                    <button className={Style.smallButton}>join with us</button>
                </div>

                <div className={Style.verticalLine}></div>
                
                <div className={Style.publicGroupsCardsDiv2}>
                    <Link to='/'><img src={publicGroups.adminPic} /></Link>

                    <p className="mx-auto" style={{margin: '0px', font: '400 12px "Poppins"'}}>{publicGroups.adminName}</p>

                    <div className={Style.circleDiv}>
                        {LEFT.map((pixle) => circle(pixle))}
                    </div>

                    <p style={{font:'400 12px "Poppins', color: '#777E90', margin: '0px', textAlign: 'center'}}>{publicGroups.currentMembers} / {publicGroups.maxMembers}</p>
                </div>
            </div>
        </div>
    );
}

export default PublicGroupsCards;