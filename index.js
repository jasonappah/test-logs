const colors = require("colors");
var http = require("http");

colors.enable();

const pickRandomFromArr = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const colorLog = () => {
  let str = "";
  const c = pickRandomFromArr(Object.keys(colors.styles));
  const c2 = pickRandomFromArr(Object.keys(colors.styles));
  const both = Math.random() >= 0.5;
  const thing = colors.styles[c];
  const thing2 = colors.styles[c2];
  str += thing["open"];
  str += both ? thing2["open"] : "";
  str += `This should be ${c}${both ? ` and ${c2}.` : "."}`;
  str += thing["close"];
  str += both ? thing2["close"] : "";
  console.log(str);
};

setInterval(colorLog, process.env.INTERVAL || 500);

if (process.env.SERVER) {
  const port = process.env.PORT || 3000;
  console.log(
    `Starting a web server on port ${port} because env var SERVER was specified...`
  );
  http
    .createServer(function (_, res) {
      res.write("it's alive.\n");
      res.end();
      console.log("Just handled web request.");
    })
    .listen(port);
}
