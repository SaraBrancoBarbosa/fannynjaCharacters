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
    <div>
        {scrollToTopBtn && (
            <button 
                className="button"
                onClick={scrollUp}
            >
                <img src={`${import.meta.env.BASE_URL}assets/icons/chevron.svg`}></img>
                
            </button>
        )}
      
    </div>
  )
}

export default ScrollToTop
