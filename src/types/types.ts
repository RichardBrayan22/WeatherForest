export type City = {
  name: string;
  lat?: number;
  long?: number;
};

export type ForecastType = {
  city: {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: string;
        gust: string;
        deg: string;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
};
