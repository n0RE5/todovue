export const  formatDate = (inputDate) => {
      let date, month, year;

      date = inputDate.getDate();
      month = inputDate.getMonth() + 1;
      year = inputDate.getFullYear();

      date = date
            .toString()
            .padStart(2, '0');

      month = month
            .toString()
            .padStart(2, '0');

      return `${date}.${month}.${year}`;
}

export const parseRawDate = (inputDate) => {
      const dateSeconds = Date.parse(inputDate)
      const dateFrom = new Date(dateSeconds);
      const date = formatDate(dateFrom)
      return date
}