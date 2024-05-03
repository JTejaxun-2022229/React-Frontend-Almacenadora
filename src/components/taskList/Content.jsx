import { Route, Routes } from 'react-router-dom';
import Task from '../tasks/Tasks';

const Content = () => {

    return (
        <div className="content-container">
            <Routes>
                <Route path="/task" element={<Task />} />
            </Routes>
        </div>
    );
};

export default Content;