const axios = require('axios'),
cheerio = require('cheerio');

module.exports = {
get: async function(url) {
const every_nth = (oyuncular, nth) => oyuncular.filter((e, i) => i % 4 === nth - 1);
const response = await axios.get(url);
const $ = cheerio.load(response.data);

let arr = []

let oyuncular = $('div#HTML_online_players table.table_lst.table_lst_stp td').text().replace(/\t/gi, " ").replace(/\n/gi, " ").split("  ")

oyuncular.forEach(x => {
  if (x == '') return;
  x.replace(/ /gi, "");
  if (x == ' ') return;
  arr.push(String(x));
})

let plyrs = every_nth(arr, 2);

let objs = 
  
     plyrs.map(player => player)
    

return objs
}
}