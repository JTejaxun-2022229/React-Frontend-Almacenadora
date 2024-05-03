import { Route, Routes } from 'react-router-dom';
import { Tasks } from '../tasks/Tasks';

export const Content = () => {

    return (
        <div className="content-container">
            <Routes>
                <Route path="/" element={<Tasks />} />
            </Routes>
        </div>
    );
};
