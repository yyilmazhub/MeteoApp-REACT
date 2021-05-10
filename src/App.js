import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import {apiKey, baseUrl} from './config';
import WeatherList from './components/WeatherList';

function App() {

  const { data, error, inProgress, setUrl } = useFetch();

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && inProgress) return <h2>Loading...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <Container className="App">
      <CitySelector onSelectButtonClick={city => setUrl(`${baseUrl}/data/2.5/forecast/daily?q=${city}&cnt=5&appId=${apiKey}&units=metric`)} />
      {getContent()}
    </Container>
  );
}

export default App;
