const moment = require("moment");
moment.locale("es");
console.log("Nací " + moment("15/07/1991", "DD/MM/YYYY").fromNow())