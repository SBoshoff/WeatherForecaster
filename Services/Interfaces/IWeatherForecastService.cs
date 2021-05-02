using System.Threading.Tasks;
using WeatherForecaster.Models;

namespace WeatherForecaster.Services.Interfaces
{
    public interface IWeatherForecastService
    {
        public Task<WeatherForecast> GetWeather();
    }
}
