export interface CityWeather {
  location: {
    city: string;
    country: string;
  };
  longitude: number;
  latitude: number;
  temperature: {
    celsius: number;
    feels_like:number;
    temp_min:number;
    temp_max:number;
  };
   humidity:number;
   sun: {
     sunrise: string;
     sunset: string;
  };
   description: string;
   api_url: string;
}
