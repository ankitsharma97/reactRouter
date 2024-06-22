import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://api.github.com/users/ankitsharma97')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);
  
  return (
    <div className='text-center bg-gray-700 text-white'>Github-Follower: {data.followers}</div>
  );
}

export default Github;
