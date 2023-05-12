import axios from 'axios';

const HOLIDAY_API_URL = 'https://holidayapi.com/v1/holidays';
const HOLIDAY_API_KEY = 'b9ff3577-7e11-409b-a414-10389ad5f161';

export const getHolidays = async (country, year, month) => {
  const url = `https://holidayapi.com/v1/holidays?key=b9ff3577-7e11-409b-a414-10389ad5f16&country=BR&year=2023&month=5`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
