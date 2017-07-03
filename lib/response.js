var response = function (req,res) {
    this.req = req;
    this.res = res;
}

response.prototype.ok = function () {
    this.res.status(200).end();
}

response.prototype.list = function (list) {
    this.res.json(list);
}

response.prototype.err = function (err) {
    this.res.status(400).json({"err": err.message});
}

module.exports = response;
