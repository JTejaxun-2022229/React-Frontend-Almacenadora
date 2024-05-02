import { Route, Routes } from "react-router-dom";
import { Tasks } from "../tasks/Task";
import { Settings } from "../settings/Settings";
import { TaskView } from '../tasks/TaskView'

export const Content = ({ tasks, getTasks }) => {

    return (
        
        <div>
            <Routes>
                <Route path="settings" element={<Settings />} />
                <Route path="tasks" element={<Tasks tasks={tasks} />} />
                <Route path="tasks/:id" element={<TaskView getTasks={getTasks} />} />
            </Routes>
        </div>
    )
}   