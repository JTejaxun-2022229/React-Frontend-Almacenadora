import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTask as postTaskRequest} from "../../services";
import toast from "react-hot-toast";

export const useTaskAdd = () => {
    const [ isLoading, setIsLoading ] = useState
}