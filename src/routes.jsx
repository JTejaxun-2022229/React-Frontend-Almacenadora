import { TasksAdd } from "./components/general/task/TasksAdd"
import { TasksSettings } from "./components/general/task/TasksSettings"

const routes = [
    {path: '/', element: <TasksAdd/>},
    {path: '/settings', element: <TasksSettings />
},
]

export default routes