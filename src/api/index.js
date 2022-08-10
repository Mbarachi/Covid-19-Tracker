import axios from "axios";

const ur1 = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(ur1);

    return {confirmed, recovered, deaths, lastUpdate }

  } catch (error) {}
};
