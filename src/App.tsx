import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import { City, ForecastType } from './types/types';

const App = () => {
  const [city, setCity] = useState<City>({
    name: '',
  });
  const [forecast, setForecast] = useState<ForecastType | null>(null);

  const {
    register,
    formState: { errors },
  } = useForm<City>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city.name}&cnt=9&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=pt_br`
      )
      .then((response) => {
        console.log(response.data);
        setForecast(response.data);
        toast.success(`City Found`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`City doesn't exist`, {
          theme: 'colored',
        });
      });
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setCity({ ...city, [name]: value });
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid main-container">
        <div className="search-container">
          <h3>Weather Forecast</h3>
          <p>Enter below a place you want to know the weather.</p>
          <form onSubmit={onSubmit}>
            <div className="form-container">
              <input
                {...register('name', {
                  required: 'Campo Obrigatorio',
                })}
                type="text"
                name="name"
                className={`search-input ${errors ? 'is-invalid ' : ''}`}
                onChange={onInputChange}
              />

              <button type="submit" className="btn btn-primary search-button">
                Search
              </button>
            </div>
          </form>
        </div>

        {forecast && (
          <>
            <WeatherCard data={forecast} />
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
