export interface ICity {
  name: string;
  tempInfo: ITemp;
  weather: IWeahter[];
  wind: IWind;
}

interface ITemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface IWeahter {
  description: string;
}

interface IWind {
  speed: number;
}
