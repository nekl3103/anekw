import React from "react";
import { Descriptions, Card } from "antd";
import PropTypes from "prop-types";

const Weather = ({ info }) => {
  return (
    <Card
      title={info.name}
      bordered={false}
      style={{ width: 300 }}
    >
      <Descriptions className="DescriptionsNew" size="small" column={1}>
        <Descriptions.Item label="Страна">{info.sys.country}</Descriptions.Item>
        <Descriptions.Item label="Город">{info.name}</Descriptions.Item>
        {info.weather.map((props, i) => (
          <Descriptions.Item label="Погода" key={i}>
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt=""
            />
            <span>{props.description}</span>
          </Descriptions.Item>
        ))}
        <Descriptions.Item label="Температора">
          {info.main.temp}°C
        </Descriptions.Item>
        <Descriptions.Item label="Давление">
          {info.main.pressure}hPa
        </Descriptions.Item>
        <Descriptions.Item label="Владжность">
          {info.main.humidity}%
        </Descriptions.Item>
        <Descriptions.Item label="Ветер">{info.wind.deg}°</Descriptions.Item>
        <Descriptions.Item label="Ветер (speed)">
          {info.wind.speed}m/s
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

Weather.propTypes = {
  info: PropTypes.object,
};

Weather.defaultProps = {
  info: {
    name: "Не установлено",
    sys: {
      country: "Не установлена",
    },
    weather: [{ id: 800, main: "Clear", description: "ясно", icon: "01d" }],
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
    },
    icon: "01d",
    wind: { speed: 0, deg: 0 },
  },
};
export default Weather;
