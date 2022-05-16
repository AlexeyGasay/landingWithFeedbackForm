const Pool = require("pg").Pool;


// const pool = new Pool({
//     user: "pcnmuiczhbswfu",
//     password: "225ab46bc0018327e986a8acac6bfcd0763b25ffd1f1f737aeb798607948762a",
//     host: "ec2-54-86-224-85.compute-1.amazonaws.com",
//     port: 5432,
//     database: "dacu7vup783eie"
// });


// module.exports = pool;


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  module.exports = pool;