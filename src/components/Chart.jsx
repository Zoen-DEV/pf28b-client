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

const labels = [100, 120, 130, 140, 150, 200, 220, 240, 90, 300];

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
