import styles from './memberInfoCard.module.css';
  const MemberInfoCard=({ img ,name, role, rating,visable })=>{
    return(
     <>
  <div className={`${styles.card} ${role === 'admin' ? styles.admin : styles.member} ${visable==="1"?styles.visable:styles.none}`}>
      <img src={img} alt="..." className={styles.profilephoto} />
      <div>
        <p className={styles.name}>{role === 'admin' ?  <span className={styles.admincolor}  style={{color:"#F6C92D"}}>Admin</span>: <span className={styles.membercolor} style={{color:"white"}}> Member</span>} {name}</p>
        <div className={styles.info}>
          <svg style={{marginTop:"3px"}} xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.76769 1.14748L8.84956 3.27635L11.2783 3.61911C12.4161 3.77963 12.9362 5.18369 12.0591 6.01341L10.3146 7.66224L10.7251 9.98556C10.9354 11.1757 9.67219 11.975 8.67749 11.4682L6.49989 10.3575L4.32294 11.4679C3.32677 11.9764 2.06462 11.1744 2.27462 9.9856L2.68521 7.66224L0.940938 6.01364C0.0632092 5.18331 0.585132 3.77955 1.72135 3.61913L4.1503 3.27634L5.23271 1.14748C5.75549 0.118853 7.245 0.118763 7.76769 1.14748Z" fill="#F6C92D"/>
          </svg>
          <p className={styles.reviews}>
          
          {rating}(210 reviews)</p>
        </div>
      </div>
    </div> 
     </>
  
    )
  }
  export default MemberInfoCard