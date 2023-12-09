import React,{useEffect, useState} from 'react';
import HomeLoading from '../../components/HomeLoading/Loading';

function Home() {
    const [homeloading, setHomeloading] = useState(true);
    useEffect(() => {
        setTimeout(() => setHomeloading(false), 3300)
    }, [])
    if (homeloading) {
        return <HomeLoading />
    }
  return (
    <div>Home</div>
  )
}

export default Home