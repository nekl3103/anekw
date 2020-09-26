import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import styles from "./App.module.scss";
import { Layout, Menu, Breadcrumb, message } from "antd";
import WidgetWeather from "./components/WidgetWeather";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [weather, setWeather] = useState();
  const [geolocation, setGeolocation] = useState();

  const getWeather = async () => {
    if (!geolocation) return;
    const { latitude, longitude } = geolocation;
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
        .then((res) => res.json())
        .then((json) => setWeather(json));
    } catch (e) {
      message.error(e);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setGeolocation(pos.coords),
      (error) => message.error("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!")
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeather();
  }, [geolocation]);

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Главная</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Погода в вашем городе</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380 }}>
          <WidgetWeather info={weather} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Александр Неклюдов</Footer>
    </Layout>
  );
};

export default App;
