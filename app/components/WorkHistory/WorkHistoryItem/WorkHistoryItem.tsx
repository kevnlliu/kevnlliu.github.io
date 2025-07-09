import styles from "./WorkHistoryItem.module.css";
import { useEffect, useRef, useState } from "react";

const WorkHistoryItem = (workItem: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.01, // Trigger when 1% of the element is visible
        rootMargin: "0px 0px -20px 0px", // Adjust when animation triggers
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <li
      ref={itemRef}
      className={`${styles["work-history-item"]} ${
        isVisible
          ? styles["work-history-item-visible"]
          : styles["work-history-item-hidden"]
      }`}
    >
      <img src={workItem.logo} className={styles["work-history-item-logo"]} />
      <div className={styles["work-history-item-text"]}>
        <h5 className={styles["work-history-item-text-position"]}>
          {workItem.position}
        </h5>
        <p className={styles["work-history-item-text-description"]}>
          {workItem.description}
        </p>
      </div>
      <h5 className={styles["work-history-item-dates"]}>
        {workItem.end
          ? `${workItem.start} - ${workItem.end}`
          : `${workItem.start} (current)`}
      </h5>
    </li>
  );
};

export default WorkHistoryItem;
