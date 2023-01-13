export default class Statement {
  static print(trasactionObject) {
    console.log(`date       || credit  || debit  || balance`);
    for (let trasObj of trasactionObject) {
      // Converting the date into right Format
      //I have to manually set year/month/date in toLocaleString bcoz its displaying my date as 10/1/2012
      var date = trasObj.getDate();
      var newDateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      var newDate = date.toLocaleString("en-GB", newDateOptions);

      //Printing the Statement
      if (trasObj.getType() === "deposit") {
        console.log(
          newDate +
            " || " +
            trasObj.getAmount().toFixed(2) +
            " ||" +
            "       " +
            " || " +
            trasObj.getBalance().toFixed(2)
        );
      } else {
        console.log(
          newDate +
            " || " +
            "       " +
            " || " +
            trasObj.getAmount().toFixed(2) +
            " || " +
            trasObj.getBalance().toFixed(2)
        );
      }
    }
  }
}
