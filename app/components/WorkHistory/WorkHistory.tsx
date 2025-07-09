import styles from "./WorkHistory.module.css";
import WorkHistoryItem from "./WorkHistoryItem/WorkHistoryItem";
import metaLogo from "./logos/metaLogo.png";
import avevaLogo from "./logos/avevaLogo.png";
import mobileMoneyLogo from "./logos/mobileMoneyLogo.png";
import uciLogo from "./logos/uciLogo.png";

const WorkHistory = () => {
  const workHistoryList = [
    {
      logo: metaLogo,
      position: "Software Engineer",
      description: "Incoming full-time junior software engineer (E3)",
      start: "Incoming August 2025",
      end: null,
    },
    {
      logo: avevaLogo,
      position: "Software Engineer Intern",
      description: "Worked on AVEVA Connect related projects",
      start: "July 2024",
      end: "February 2025",
    },
    {
      logo: avevaLogo,
      position: "Software Engineer Intern",
      description: "Worked on AVEVA System Platform related projects",
      start: "June 2023",
      end: "September 2023",
    },
    {
      logo: mobileMoneyLogo,
      position: "Software Engineer Intern",
      description:
        "Implemented an event and rule based incident reporting framework with Django models",
      start: "August 2022",
      end: "October 2022",
    },
    {
      logo: uciLogo,
      position: "Undergraduate Researcher",
      description:
        "Part of 2022 IoT-Sity REU Summer Research Program, developed an end-to-end distributed system for drone monitoring of prescribed fires and published demo paper at 2023 ACM/IEEE IoTDI",
      start: "June 2022",
      end: "December 2022",
    },
  ];
  return (
    <div id={styles["work-history"]}>
      <h1 id={styles["work-history-title"]}>Work History</h1>
      <ul id={styles["work-history-list"]}>
        {workHistoryList.map((workItem, index) => (
          <WorkHistoryItem key={index} {...workItem} />
        ))}
      </ul>
    </div>
  );
};

export default WorkHistory;
