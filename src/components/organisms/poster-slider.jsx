import { useRef, useState, useEffect } from 'react';
import ScrollRightButton from "../atoms/scroll-right-button";
import ScrollLeftButton from "../atoms/scroll-left-button";
import Poster from "./poster";
import clsx from 'clsx'
import NoContent from '../atoms/no-content';
import { getDeviceType } from '../../utils/get-device-type';

const PosterSlider = ({ movies, galleryType, idToggleHandler, isInMyListHandler, alt, isWrapped=false}) => {
  const scrollContainerRef = useRef(null);
  const itemRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const animationFrameRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  //pemeriksaan device type
  const [isDesktopTypeDevice, setIsDesktopTypeDevice] = useState(true);

  // Check for mobile and content overflow
  useEffect(() => {
    const checkDeviceType = () => {
      setIsDesktopTypeDevice(getDeviceType() === 'desktop');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType)
    
    const checkIfMobile = () => {
      setIsMobile(
        // berdasarkan ukuran layar dan pemeriksaan type devices secara sederhana
        (window.innerWidth < 640) && (!isDesktopTypeDevice)
      );
    };

    const checkContentOverflow = () => {
      if (scrollContainerRef.current && itemRef.current) {
        const container = scrollContainerRef.current;
        const itemWidth = itemRef.current.offsetWidth;
        const gap = 16; // space-x-4 = 16px
        const totalContentWidth = movies.length * (itemWidth + gap) - gap;
        
        setShowScrollButtons(totalContentWidth > container.offsetWidth);
      }
    };

    checkDeviceType();
    checkIfMobile();
    checkContentOverflow();
    
    const resizeObserver = new ResizeObserver(checkContentOverflow);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    window.addEventListener('resize', getDeviceType);
    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('resize', checkContentOverflow);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', getDeviceType);
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', checkContentOverflow);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [movies.length, isDesktopTypeDevice]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const smoothScroll = (distance, duration = 800) => {
    if (!scrollContainerRef.current || isScrolling) return;

    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const start = container.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      container.scrollLeft = start + distance * easedProgress;
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    container.scrollLeft = start + distance * 0.05;
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  const handleScrollLeft = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = -(itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const handleScrollRight = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = (itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const posterContainer = useRef(null)
  
  const [xBoundary, setXBoundary] = useState({left:0, right:0});

  useEffect(() => {
    const updatePosition = () => {
      if (posterContainer.current) {
        setXBoundary({
          left: posterContainer.current.getBoundingClientRect().left,
          right: posterContainer.current.getBoundingClientRect().right
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const posters = movies.map((movie, index) => (
    <li
      key={movie.id}
      className="inline-block flex-shrink-0"
      ref={index === 0 ? itemRef : null}
    >
      <Poster
        movie={movie} galleryType={galleryType}
        //isMobile={isMobile}
        xBoundary={xBoundary}
        onClick={idToggleHandler} isInMyListHandler={isInMyListHandler}
      />
    </li>
  ));

  const baseStyle = "flex list-none p-0 whitespace-nowrap";
  const galleryClass = galleryType == 'continue' ? '' : 'gap-4'
  const wrapCLass = isWrapped ? 'flex-wrap' : ''

  return (
    <div
      className="relative overflow-visible"
      ref={posterContainer}
    >
      <div 
        ref={scrollContainerRef}
        className = "w-full py-12 touch-pan-x overflow-x-scroll scrollbar-hide"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        { movies.length > 0 ?
          <ul
            className={clsx(baseStyle, galleryClass, wrapCLass)}
          >
            { posters }
          </ul> :
          <NoContent>{ alt }</NoContent>
        }
      </div>

      { !isWrapped && !isMobile && showScrollButtons && (
        <>
          <div className="absolute z-20 bottom-1/2 translate-y-1/2 left-0 -translate-x-1/2 transition-opacity duration-300">
            <ScrollLeftButton 
              onClick={(e) => {
                e.stopPropagation();
                handleScrollLeft();
              }}
              className="hover:opacity-80"
            />
          </div>
          <div className="absolute z-20 bottom-1/2 translate-y-1/2 right-0 translate-x-1/2 transition-opacity duration-300">
            <ScrollRightButton 
              onClick={(e) => {
                e.stopPropagation();
                handleScrollRight();
              }}
              className="hover:opacity-80"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PosterSlider;