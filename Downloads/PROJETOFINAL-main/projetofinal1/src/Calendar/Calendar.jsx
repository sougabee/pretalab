import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Calendar() {
  const [calendar1, setCalendar1] = useState(null);
  useEffect(() => {
    axios
      .get(
        //'https://holidayapi.com/v1/holidays?key=b9ff3577-7e11-409b-a414-10389ad5f161&country=BR&year=2022',
        'https://brasilapi.com.br/api/feriados/v1/2023',
      )
      .then((response) => {
        console.log(response.data);
        setCalendar1(response.data);
        console.log(calendar1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!calendar1) {
    return <h2>Carregando...</h2>;
  }
  return (
    <div>
      <text src={calendar1.log} alt="" />
    </div>
  );
}

export default Calendar;
