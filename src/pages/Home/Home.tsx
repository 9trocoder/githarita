import React,{useEffect, useState} from 'react';
import HomeLoading from '../../components/HomeLoading/Loading';
import General from '../../layouts/General';

function Home() {
    const [homeloading, setHomeloading] = useState(true);
    useEffect(() => {
        setTimeout(() => setHomeloading(false), 3300)
    }, [])
    if (homeloading) {
        return <HomeLoading />
    }
  return (
    <General />
  )
}

export default Home