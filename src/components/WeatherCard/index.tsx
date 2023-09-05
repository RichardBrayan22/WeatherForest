import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from '../../helpers';
import { ForecastType } from '../../types/types';
import Sunrise from '../Icons/Sunrise';
import Sunset from '../Icons/Sunset';
import WeatherInfos from '../WeatherInfosCard';

import './styles.css';

type Props = {
  data: ForecastType;
};

const Degree = ({ temp }: { temp: number }) => {
  return (
    <span>
      {temp} <sup>°</sup>
    </span>
  );
};

const WeatherCard = ({ data }: Props) => {
  const today = data.list[0];

  return (
    <div className="weather-card-container">
      <div className="top-container">
        <section className="top-container-center">
          <h2 className="city-country-code">
            {data.city.name} <span>{data.city.country}</span>
          </h2>
          <h2 className="temp-now">
            <Degree temp={Math.round(today.main.temp)} />
          </h2>
          <p className="info-weather">
            {today.weather[0].main} ( {today.weather[0].description} )
          </p>
        </section>

        <section className="d-flex overflow-auto mt-4 mb-5 pb-2">
          {data.list.map((item, i) => (
            <div key={i} className="inline-block text-center w-50 ">
              <p className="hours-info">
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p className="temp-hours-info">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>

        <section className=" container-cards">
          <div className="cards-info">
            <Sunrise />{' '}
            <span className="mt-2">{getSunTime(data.city.sunrise)}</span>
          </div>
          <div className="cards-info">
            <Sunset />{' '}
            <span className="mt-2">{getSunTime(data.city.sunset)}</span>
          </div>
          {/** Wind */}
          <WeatherInfos
            icon="wind"
            title="Wind"
            info={`${Math.round(Number(today.wind.speed))} m/s `}
            description={`${getWindDirection(
              Math.round(Number(today.wind.deg))
            )}, gust ${Number(today.wind.gust).toFixed(1)} m/s `}
          />
          {/** Feels Like */}
          <WeatherInfos
            icon="feels"
            title="Feels Like"
            info={`${Math.round(today.main.feels_like)} °`}
            description={`${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'Colder'
                : 'Warmer'
            }`}
          />
          {/** Humidity */}
          <WeatherInfos
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity}%`}
            description={`${getHumidityValue(today.main.humidity)}`}
          />

          {/** Pop */}
          <WeatherInfos
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}`}
          />
          {/** Pressure */}
          <WeatherInfos
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={`${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          {/** Visibility*/}
          <WeatherInfos
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={`${getVisibilityValue(today.visibility)}`}
          />
        </section>
      </div>
    </div>
  );
};

export default WeatherCard;
