import React, { useEffect } from "react";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getWinnings } from "../redux/Actions/actions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const options = {
  responsive: true,
};

const Chart = () => {
  const dispatch = useDispatch();
  const profits = useSelector((state) => state.profits);

  useEffect(() => {
    dispatch(getWinnings());
  }, [dispatch]);

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Winnings",
          data: profits,
        },
      ],
      labels,
    };
  }, []);
  return <Line data={data} options={options} />;
};

export default Chart;
