import { useEffect, useState } from 'react'

function TopBanner() {
  const [top, setTop] = useState<boolean>(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the state using the updater function
      setTop(prev => !prev);
    }, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="top-banner">
     <p className={top ? 'show' : 'hide'}>
        EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS. (NOT APPLICABLE ON FENTY x PUMA)
      </p> 
     <p className={!top ? 'show' : 'hide'}>
        FREE SHIPPING ON ALL ONLINE PAYMENTS. FREE RETURNS.
      </p>
      
    </div>
  )
}

export default TopBanner