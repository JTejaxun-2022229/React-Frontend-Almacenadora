import { TaskList } from "../src/pages/taskList/TaskList"
import { TasksAdd } from "../src/components/tasks/TasksAdd"
import { TasksSettings } from "../src/components/tasks/TasksSettings"

const routes = [

    { path: '/*', element: <TaskList /> },
    { path: '/', element: <TasksAdd /> },
    { path: '/settings', element: <TasksSettings /> }
]

export default routes
