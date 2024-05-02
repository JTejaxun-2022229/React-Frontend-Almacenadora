//import { TaskSettings } from "../channel/ChannelSettings";
//import { useTaskSettings } from "../../shared/hooks";
//import { LoadingSpinner } from "../LoadingSpinner";

export const Settings = () => {

    const {TaskSettings, isFetching, saveSettings} = useTaskSettings()
   
    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div>
            <span>Settings</span>
            <TaskSettings settings={taskSettings} saveSettings={saveSettings}/>    
        </div>
    )
}