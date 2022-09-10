import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TaskDetailPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    const {id} = useParams()

    return (
        <div>
            <h3>Task Details - {id}</h3>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

export default TaskDetailPage;
