import styles from "./GroupMember.module.css";
import TripDetails from "./TripDetails";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../Componets/Forms/Storage";

// Helper function outside the component
const getUserImageSrc = (imgString) => {
  if (!imgString) return "/defaultUser.png";

  if (
    imgString.startsWith("data:image") ||
    imgString.startsWith("http://") ||
    imgString.startsWith("https://")
  ) {
    return imgString;
  }

  // Treat as raw base64 string
  return `data:image/png;base64,${imgString}`;
};

const generatePriceDetails = (membersCount) => {
  const basePrice = 100; // base price per member or group
  const discount = 0.1; // 10% discount
  const serviceFee = 50;

  const subtotal = basePrice * membersCount;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + serviceFee;

  return {
    row1: `$${basePrice} x ${membersCount}`,
    res1: `$${subtotal}`,
    row2: `10% campaign discount`,
    res2: `-$${discountAmount.toFixed(2)}`,
    row3: "Service fee",
    res3: `$${serviceFee}`,
    row4: "Total",
    res4: `$${total.toFixed(2)}`,
  };
};

const GroupMember = () => {
  const location = useLocation();
  const group = location.state; // The group object passed via react-router state
  const currentUser = getCurrentUser();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (!group) return;

    // Build admin member card
    const admin = {
      img: group.adminPic,
      name: group.adminName,
      role: "admin",
      rating: group.rating || "5.0",
    };

    // Build normal member cards
    const normalMembers = (group.members || []).map((m) => ({
      img: m.image,
      name: m.name,
      role: "member",
      rating: m.rating,
    }));

    // Check if current user has visited this group in their history
    const userVisitedGroup = currentUser?.history?.some(
      (item) => item.name === group.name
    );

    // Create "You" member card if visited
    const youMember = userVisitedGroup
      ? [
          {
            img: getUserImageSrc(currentUser?.src),
            name: currentUser?.email
              ? currentUser.email.split("@")[0] + "        (You)"
              : "You",
            role: "member",
            rating: "3.6",
          },
        ]
      : [];

    const newMembers = [admin, ...normalMembers, ...youMember];

    // Update members state only if changed to prevent infinite loops
    setMembers((oldMembers) => {
      if (
        oldMembers.length === newMembers.length &&
        oldMembers.every(
          (m, i) =>
            m.name === newMembers[i].name &&
            m.role === newMembers[i].role &&
            m.img === newMembers[i].img
        )
      ) {
        // No change, skip update
        return oldMembers;
      }
      return newMembers;
    });
  }, [group, currentUser]);

  if (!group) {
    return (
      <div className={styles.container}>
        <p>No group data available.</p>
      </div>
    );
  }

  // Check if current user is a member of the group by matching email in members
  const isUserJoined = currentUser?.history?.some(
    (item) => item.name === group.name
  );

  const isDisabled = group.members.length >= 8;
  const priceDetails = generatePriceDetails(
    parseInt(group.currentMembers, 10) + (isUserJoined ? 1 : 0)
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.header}>
            <h2 className={styles.pageTitle}>Public Group</h2>
          </div>

          <p className={styles.groupName}>
            Group name: <span>{group.name}</span>
          </p>

          <div className={styles.cards}>
            {members.map((member, index) => {
              // Skip rendering the member at index members.length - 2
              if (index === members.length - 2) return null;

              return (
                <div
                  key={index}
                  className={`${styles.memberCard} ${
                    member.role === "admin"
                      ? styles.adminCard
                      : member.name.includes("(You)")
                      ? styles.youCard
                      : ""
                  }`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className={styles.memberAvatar}
                  />
                  <div className={styles.memberInfo}>
                    <p className={styles.memberName}>
                      {member.role === "admin"
                        ? "👑 Admin"
                        : member.role === "you"
                        ? "👤 You"
                        : "Member"}{" "}
                      {member.name}
                    </p>
                    <p className={styles.memberRating}>
                      ⭐ {member.rating} (reviews)
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/creditsGroup"
            state={{
              name: group.name,
              category: group.category,
              image: group.image,
              ...priceDetails,
            }}
          >
            <button
              className={styles.join}
              disabled={isDisabled || isUserJoined}
            >
              Join With Us
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          {/* Pass isUserJoined as prop */}
          <TripDetails joined={isUserJoined} />
        </div>
      </div>
    </div>
  );
};

export default GroupMember;
