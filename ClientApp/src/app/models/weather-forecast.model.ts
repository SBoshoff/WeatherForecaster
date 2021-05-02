export class WeatherForecast{
    consolidated_weather: WeatherForecastItem[];

    constructor(consolidated_weather: WeatherForecastItem[]) {
        this.consolidated_weather = consolidated_weather;
    }
}

class WeatherForecastItem {
    weather_state_name: string;
    weather_state_abbr: string;
    applicable_date: Date;

    constructor(weather_state_name: string, weather_state_abbr: string, applicable_date: Date) {
        this.weather_state_name = weather_state_name;
        this.weather_state_abbr = weather_state_abbr;
        this.applicable_date = applicable_date;
    }
}