using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeatherForecaster.Models;
using WeatherForecaster.Services.Interfaces;

namespace WeatherForecaster.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IWeatherForecastService _weatherForecastService;

        public WeatherForecastController(IWeatherForecastService weatherForecastService)
        {
            _weatherForecastService = weatherForecastService;
        }

        [HttpGet]
        [Authorize]
        public async Task<WeatherForecast> Get()
        {
            try
            {
                return await _weatherForecastService.GetWeather();
            }
            catch (Exception e)
            {
                Console.WriteLine("An error has occurred: " + e);
                throw;
            }
        }
    }
}
