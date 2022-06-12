import React, { useState } from 'react'
import Spinner from '../components/Spinner';

const FullPageLoader = () => {
    const [loading, setLoading] = useState(false);

  return [
      loading ? <Spinner/> : null,
      ()=> setLoading(true),
      ()=> setLoading(false)
  ];
}

export default FullPageLoader