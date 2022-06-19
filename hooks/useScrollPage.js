import { useEffect } from "react"
const useScrollPage = (handleScroll, props=[]) => {
    useEffect(() => {
        document.addEventListener("scroll",handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    },[...props])
}

export default useScrollPage;