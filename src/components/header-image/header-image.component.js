import React, {useState} from 'react';
import './header-image.styles.scss'
import { useLocation } from "react-router-dom";
import background from '../../images/mountains.jpg'
import iceland from '../../images/iceland.jpg'

const HeaderImage = () => {

  const mainBackgound = background
  const icelandBackground = iceland
  const croatiaBackground = 'https://res.cloudinary.com/dqncfvnsi/image/upload/v1574521241/croatia_rtl60w.jpg'
  const [newBackground, changeBackground] = useState(0)

  function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
     let pathName = (["pageview", location.pathname][1])
     if (pathName === '/iceland') {
       changeBackground(icelandBackground)}
       else if (pathName === '/croatia') {
        changeBackground(croatiaBackground)
       }
       else {
        changeBackground(mainBackgound)
       }

    
    });

    
  }
  usePageViews()

return (
  <div className="bg-img"             style={{
    backgroundImage:`url("${newBackground}")`
}}>
    <h1 className="bg-txt">The Way Travel Should Be</h1>
  </div>
  )
}

export default HeaderImage