import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} Travel Guru`;
    }, [])
}

export default useTitle;