const fs = require("fs");

let data = require(process.env.GITHUB_EVENT_PATH);

fs.writeFileSync(
  `data/submissions/${data.client_payload.repo.replace("/", "_")}.json`,
  JSON.stringify(data.client_payload)
);
