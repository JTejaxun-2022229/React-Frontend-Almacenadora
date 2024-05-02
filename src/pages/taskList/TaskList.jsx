import { useEffect } from "react";
//import { LoadingSpinner } from "../../components/LoadingSpinner";
//import { Content } from "../../components/dashboard/Content";
import "./taskList.css";

export const TaskList = () => {

  const { getTasks, allTasks, isFetching } = useChannels();

  useEffect(() => {
    
  }, []);

  if (isFetching) {
    <LoadingSpinner />;
  }

  return (
    <div >
    </div>
  );
};