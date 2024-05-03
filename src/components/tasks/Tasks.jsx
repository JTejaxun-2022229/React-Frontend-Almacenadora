import { useNavigate } from "react-router-dom";

export const Tasks = ({tasks}) => {
    const navigate = useNavigate();

    retur(
        <div>
            {tasks.map((c)=>(
                <Tasks/>
            ))}
        </div>
    )
}