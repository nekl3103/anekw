import React from "react";
import { Descriptions, Card } from "antd";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const WidgetWeather = ({ info }) => {
  return (
    <Card title={info.name} bordered={false} className={styles.CardDescriptions}>
      <Descriptions className={styles.DescriptionsNew} size="small" column={1}>
        <Descriptions.Item label="Страна">{info.sys.country}</Descriptions.Item>
        <Descriptions.Item label="Город">{info.name}</Descriptions.Item>
        {info.weather.map((props, i) => (
          <Descriptions.Item label="Погода" key={i}>
            <div className={styles.rowImgItem}>
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
              <span>{props.description}</span>
            </div>
          </Descriptions.Item>
        ))}
        <Descriptions.Item label="Температора">{info.main.temp}°C</Descriptions.Item>
        <Descriptions.Item label="Давление">{info.main.pressure}hPa</Descriptions.Item>
        <Descriptions.Item label="Владжность">{info.main.humidity}%</Descriptions.Item>
        <Descriptions.Item label="Ветер">{info.wind.deg}°</Descriptions.Item>
        <Descriptions.Item label="Ветер (speed)">{info.wind.speed}m/s</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

WidgetWeather.propTypes = {
  info: PropTypes.object,
};

WidgetWeather.defaultProps = {
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
export default WidgetWeather;
