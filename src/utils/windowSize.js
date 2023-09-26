import { useEffect, useState } from "react";

function getWidth(){
  const {innerWidth: width} = window;
  return {width};
}
export default function useWidth(){
  const [windowWidth, setWindowWidth] = useState(getWidth());
  
  useEffect(() => {
    function handleWidth(){
      setWindowWidth(getWidth());
    };
    window.addEventListener('resize', handleWidth)
  }, []);
  return windowWidth;
}