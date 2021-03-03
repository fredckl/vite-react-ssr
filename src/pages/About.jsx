import { useEffect, useState } from 'react';

const About = () => {
  const [name, setName] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1/about');
      const data = await response.json();
      setName(data.name);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      About Page. My name is {name}
    </div>
  );
};

export default About;
