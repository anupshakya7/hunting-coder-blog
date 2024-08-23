import * as fs from "fs";

export default async function handle(req, res) {
  // let data = await fs.promises.readdir("blogdata", (err, data) => {
  //   let allBlogs = [];
  //   data.forEach((item) => {
  //     console.log(item);
  //     fs.readFile("blogdata/" + item, (d) => {
  //       allBlogs = allBlogs.push(d);
  //     });
  //   });
  //   res.status(200).json(allBlogs);
  // });

  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allBlogs);
}
