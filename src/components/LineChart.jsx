import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as chartTitle,
  Tooltip,
  Legend,
} from "chart.js";

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    chartTitle,
    Tooltip,
    Legend
  );
  const coinPrice = [];
  const coinTimeStamp = [];

  coinHistory?.data?.history?.map((item) => {
    coinPrice.push(item?.price);
    coinTimeStamp.push(new Date(item?.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
}

export default LineChart;
