var unirest = require("unirest");

var req = unirest("GET", "http://localhost:3000/pets?_limit=10");

req.headers({ "cache-control": "no-cache" });

req.end((res) => {
  if (res.error) throw Error(res.error);
  console.log(filter_name(res.body));
});

function filter_name(data) {
  return data?.filter((item) => item.pet_name.toLocaleLowerCase()[0] === "m");
}
