
const parts = [
    { id: 1, name: "Hammer1" },
    { id: 2, name: "Hammer2" },
    { id: 3, name: "Hammer3" }
];

// const getAllTools = (req, res) => {
//     res.send("Parts Found");
// };

// module.exports = {
//     getAllTools,
// }


module.exports.getAllTools = (req, res, next) => {
    // res.send("Parts Found");
    // const { ip, query, params, body, headers } = req;
    // console.log(ip, query, params, body, headers);
    // const { } = res;
    // // res.download(__dirname + "/tools.controller.js");
    // // res.json({"name":"abc"});
    // res.redirect("/login");

    // res.send(parts);
    const { limit, page } = req.query;
    console.log(limit, page);
    res.json(parts.slice(0, limit));


};

module.exports.saveATool = (req, res) => {
    // res.send("");
    console.log(req.query);
    parts.push(req.body);
    res.send(parts);
};

module.exports.getPartDetail = (req, res) => {
    const { id, test } = req.params;
    // console.log(id);
    // const filter = { _id: id };
    const foundTool = parts.find(part => part.id == id);
    res.send(foundTool);
}

