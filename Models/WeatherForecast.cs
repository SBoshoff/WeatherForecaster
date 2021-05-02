using System;
using System.Collections.Generic;

namespace WeatherForecaster.Models
{
    public class ConsolidatedWeather
    {
        public string weather_state_name { get; set; }
        public string weather_state_abbr { get; set; }
        public string applicable_date { get; set; }
    }
    public class WeatherForecast
    {
        public List<ConsolidatedWeather> consolidated_weather { get; set; }
    }
}
