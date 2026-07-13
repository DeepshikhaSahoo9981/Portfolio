import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home Page/Home';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Connects from './components/Connections/Connects';
import Works from './components/Works/Works';
import MouseCanvas from './components/MouseCanvas';
import scrollImg from "/icons/right_arrow.png";
import IntroPage from './components/IntroPage';

const bgColors = ["#F2D24B", "#FFF6D2", "#F2D24B", "#FFF6D2", "#F2D24B"];
const PAGES = [<Home />, <Services />, <Experience />, <Works />, <Connects />];
const NextPageMessage = ["SCROLL TO EXPLORE", null, null, null, "THANK YOU"];
const invertImage = [false, false, false, true, false];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [IsIntro, setIsIntro] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsIntro(false);
    }, 2000)

    return () => clearTimeout(timeout);
  }, [])

  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return; // block rapid re-triggers
      isScrolling = true;

      if (e.deltaY > 0 || e.deltaX > 0) {
        // scrolling down/right → next page
        setCurrentPage(prev => (prev === PAGES.length - 1 ? prev : prev + 1));
      } else {
        // scrolling up/left → previous page
        setCurrentPage(prev => (prev === 0 ? prev : prev - 1));
      }

      setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    const handleArrows = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setCurrentPage(prev => (prev === PAGES.length - 1 ? prev : prev + 1));
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setCurrentPage(prev => (prev === 0 ? prev : prev - 1));
      }
    }

    const onTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
      })
    }

    const onTouchMove = (e) => {
      setTouchEnd({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
      });
    }

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distanceX = touchStart.x - touchEnd.x;
      const distanceY = touchStart.y - touchEnd.y;
      const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

      if (isHorizontalSwipe) {
        // Horizontal Swipes
        if (distanceX > minSwipeDistance) {
          setCurrentPage(prev => (prev === PAGES.length - 1 ? prev : prev + 1));
        } else if (distanceX < -minSwipeDistance) {
          setCurrentPage(prev => (prev === 0 ? prev : prev - 1));
        }
      } else {
        // Vertical Swipes
        if (distanceY > minSwipeDistance) {
          setCurrentPage(prev => (prev === PAGES.length - 1 ? prev : prev + 1));
        } else if (distanceY < -minSwipeDistance) {
          setCurrentPage(prev => (prev === 0 ? prev : prev - 1));
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleArrows);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleArrows);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);


    }
  }, []);

  return (
    <>
      {!IsIntro ? <div className="Portfolio" style={{ background: bgColors[currentPage] }}>
        <Header currentStats={currentPage} handleStats={setCurrentPage} />
        <MouseCanvas />
        <div className="Main" key={currentPage}>
          {PAGES[currentPage]}
          {!NextPageMessage[currentPage] && <div className="scrollTxt" onClick={() => setCurrentPage(prev => prev === PAGES.length - 1 ? prev : prev + 1)}>
            <img src={scrollImg} alt="scroll" style={{ filter: invertImage[currentPage] && "invert(1)" }} />
          </div>}
          {NextPageMessage[currentPage] && <span className="scrollTxt" id="scrollIt">{NextPageMessage[currentPage]}</span>}
        </div>
      </div> :
        <IntroPage />
      }
    </>
  )
}

export default App;
