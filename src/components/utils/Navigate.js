import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navigate = (link) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(link)
    })
}


