import Feels from '../Icons/Feels';
import Humidity from '../Icons/Humidity';
import Pop from '../Icons/Pop';
import Pressure from '../Icons/Pressure';
import Visibility from '../Icons/Visibility';
import Wind from '../Icons/Wind';

import './styles.css';

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop';
  title: string;
  info: string;
  description?: string;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

const WeatherInfos = ({ icon, title, info, description }: Props) => {
  const Icon = icons[icon];

  return (
    <article className="infos-container">
      <div className="info-title">
        <Icon /> <h4>{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <div className="info-description">{description}</div>
    </article>
  );
};
export default WeatherInfos;
