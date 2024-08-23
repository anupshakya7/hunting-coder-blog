import * as fs from "fs";

export default function handle(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No such Blog Found" });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
