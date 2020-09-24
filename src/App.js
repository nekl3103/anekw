import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import Weather from "./components/weather";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [info, setInfo] = useState(undefined);
  const Api = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=ru&units=metric&appid=5aa741a37ff6512516bcb3da3ea973f0`
    )
      .then((res) => res.json())
      .then((json) => setInfo(json));
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => Api(pos.coords),
      (error) =>
        alert("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!")
    );
  }, []);
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Главная</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Погода в вашем городе</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380 }}>
          <Weather info={info} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Александр Неклюдов</Footer>
    </Layout>
  );
};

export default App;
