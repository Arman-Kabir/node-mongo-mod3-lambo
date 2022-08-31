

// const getAllTools = (req, res) => {
//     res.send("Parts Found");
// };

// module.exports = {
//     getAllTools,
// }


module.exports.getAllTools = (req, res, next) => {
    // res.send("Parts Found");
    const { ip, query, params, body, headers } = req;
    console.log(ip, query, params, body, headers);
    const { } = res;
    // res.download(__dirname + "/tools.controller.js");
    // res.json({"name":"abc"});
    res.redirect("/login");


};

module.exports.saveATool = (req, res) => {
    res.send("");
}

