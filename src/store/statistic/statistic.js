import axios from "axios";
import utils from "../utils/utils";

let handleTotalStat = (setStat, setLoading) => {
  let stat = [];
  let err = null;

  axios
    .get("https://api.thevirustracker.com/free-api?global=stats")
    .then((result) => {
      const doc = result.data["results"][0];
      stat = [
        {
          text: "Случаев заражения",
          number: utils.beautyCount(doc["total_cases"]),
        },
        {
          text: "Погибло",
          number: utils.beautyCount(doc["total_deaths"]),
        },
        {
          text: "Выздоровело",
          number: utils.beautyCount(doc["total_recovered"]),
        },
        {
          text: "Число зараженных",
          number: utils.beautyCount(doc["total_active_cases"]),
        },
      ];

      setStat(stat);
      setLoading(false);
    })
    .catch((error) => {
      err = "Произошла какая-то хуйня";
      console.log(error);
    })
    .finally(console.log(stat));

  return err;
};

const statistic = {
  handleTotalStat,
};

export default statistic;
