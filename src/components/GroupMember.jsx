import styles from './GroupMember.module.css';
import MemberInfoCard from './memberInfoCard';
import TripDetails from './TripDetails';
import imgmember from './image/IMG.png'
import { Link } from 'react-router-dom';
const members = [
  { img: imgmember, name: 'name', role: 'admin', rating: '4.9', visable: "1" },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: "1" },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: "1" },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: "1" },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: 0 },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: 0 },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: 0 },
  { img: imgmember, name: 'name', role: 'member', rating: '4.9', visable: 0 },
];

const GroupMember = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.cards}>
            <h2 >
             <Link to='./home'> <button style={{ border: "none", backgroundColor: "transparent" }}> <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.7108 20.9794C13.1697 21.4789 12.3261 21.4451 11.8267 20.904L7.51897 16.2374C7.0475 15.7267 7.0475 14.9394 7.51896 14.4287L11.8267 9.76197C12.3261 9.22087 13.1697 9.18712 13.7108 9.68659C14.2519 10.1861 14.2856 11.0296 13.7861 11.5707L11.544 13.9997L24.4987 13.9997C25.2351 13.9997 25.832 14.5967 25.832 15.3331C25.832 16.0694 25.2351 16.6664 24.4987 16.6664L11.544 16.6664L13.7861 19.0953C14.2856 19.6364 14.2519 20.4799 13.7108 20.9794Z" fill="#23262F" />
              </svg></button></Link>
              Public Group</h2>
            <p className={styles.groupName} style={{ fontSize: "24px" }}>
              Group name : <span>yala bena</span>
            </p>

            {members.map((member, index) => (
              <MemberInfoCard
                key={index}
                img={member.img}
                name={member.name}
                role={member.role}
                rating={member.rating}
                visable={member.visable}
              />
            ))}
          </div>
         <Link to='./home'> <button className={styles.join}>Join With Us</button></Link>
        </div>

        <div className={styles.right}>
          <TripDetails />
        </div>
      </div>
    </div>

  );
}
export default GroupMember