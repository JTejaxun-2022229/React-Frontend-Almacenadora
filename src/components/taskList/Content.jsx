import { Route, Routes } from 'react-router-dom';
import Task from '../tasks/Tasks';

export const Content = () => {

    return (
        <div className="content-container">
            <Routes>
                <Route path="/task" element={<Task />} />
            </Routes>
        </div>
    );
};
