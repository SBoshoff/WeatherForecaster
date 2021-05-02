using System.Threading.Tasks;
using WeatherForecaster.Services.Interfaces;
using Newtonsoft.Json;
using System.Net.Http;
using WeatherForecaster.Models;

namespace WeatherForecaster.Services
{
    public class WeatherForecastService : IWeatherForecastService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public WeatherForecastService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<WeatherForecast> GetWeather()
        {
            var client = _httpClientFactory.CreateClient("API Client");

            var result = await client.GetAsync("/api/location/44544");

            if (result.IsSuccessStatusCode)
            {
                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<WeatherForecast>(content);
            }
            return null;
        }
    }
}
