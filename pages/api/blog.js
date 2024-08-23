import * as fs from "fs";

export default function handle(req, res) {
  fs.readdir("blogdata", (err, data) => {
    res.status(200).json(data);
  });
}
