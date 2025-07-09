import styles from "./HomePage.module.css";
import Introduction from "~/components/Introduction/Introduction";
import WorkHistory from "~/components/WorkHistory/WorkHistory";

const HomePage = () => {
  return (
    <div>
      <Introduction />
      <WorkHistory />
    </div>
  );
};

export default HomePage;
