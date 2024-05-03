import React, { useEffect } from 'react';
import { Header } from '../../components/header/Header';
import { LoadingSpinner } from '../../components/general/LoadingSpinner';
import { Content } from '../../components/taskList/Content';
import { useTask, } from '../../shared/hooks/useTask';
import './taskList.css';

export const TaskList = () => {

    const { getTask, allTask, isFetching } = useTask();

    useEffect(() => {
        getTask();
    }, []);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    return (
        <div >
            <Header />
            <Content task={allTask || []} getTask={getTask} />
        </div>
    );
};