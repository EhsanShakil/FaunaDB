const faunadb = require("faunadb");
const q = faunadb.query;

(async () => {
  var client = new faunadb.Client({
    secret: "fnAECCbbi6ACDcQkeuKs-Kfj2IAFAmZ3vPukaud5",
  });
  try {
    // var result = await client.query(q.CreateDatabase({ name: "faunadb" }));
    // console.log("Result", result);

    // var result = await client.query(
    //   q.CreateKey({
    //     database: q.Database("faunadb"),
    //     role: "server",
    //   })
    // );
    // console.log("Result", result.secret);

    // var result = await client.query(q.CreateCollection({ name: "post" }));
    // console.log("Result", result);

    // var result = await client.query(
    //   q.CreateIndex({
    //     name: "post_title",
    //     source: q.Collection("post"),
    //     terms: [{ field: ["data", "title"] }],
    //   })
    // );
    // console.log("Result", result);

    var result = await client.query(
      q.Create(q.Collection("post"), {
        data: { title: "title 1" },
      })
    );
    console.log("Result", result);
  } catch (error) {
    console.log(error);
  }
})();