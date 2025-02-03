import { useEffect, useState } from "react"
import "./scrollToTop.css"

// Button to scroll to top of page

function ScrollToTop() {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setScrollToTopBtn(true)
            } else {
                setScrollToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        {scrollToTopBtn && (
            <button 
                className="button"
                onClick={scrollUp}
            >
                <img src="assets/icons/chevron.svg"></img>
                
            </button>
        )}
    </>
  )
}

export default ScrollToTop
