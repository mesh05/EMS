const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "22EC1U3Inisl#wiswAPe",
  database: "emsdb",
  multipleStatements: true,
};

const pool = mysql.createPool(dbConfig);

app.use(express.json());
app.use(cors());

let ADMINS = [
  { admin_id: 123, admin_name: "Prathamesh Sawant", admin_pass: "123456" },
];
const STAFF = [
  {
    staff_id: 456,
    staff_name: "Sai Shiva Mani Sangem",
    staff_pass: "654321",
  },
];

pool.query("call emsdb.ac_det", (err, res) => {
  for (const row of res[0]) {
    STAFF.push(row);
  }
});

const SECRET = "shoaibchutiya";

const staffAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(user.role);
      if (user.role === "staff") {
        req.user = user;
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

// Admin routes
app.post("/admin/login", (req, res) => {
  const { admin_id, admin_pass } = req.body;
  const admin = ADMINS.find(
    (a) => a.admin_id === admin_id && a.admin_pass === admin_pass
  );
  if (admin) {
    const token = jwt.sign(
      { admin_id: admin_id, admin_name: admin_name, role: "admin" },
      SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({
      message: "Logged in successfully",
      token,
    });
  } else {
    res.status(403).json({ message: "Authentication failed" });
  }
});

// Staff routes
app.post("/signup", (req, res) => {
  const { staff_id, staff_name, staff_pass } = req.body;
  const staff = STAFF.find((a) => a.staff_id === parseInt(staff_id));
  if (staff) {
    res.status(403).json({ message: "User exists" });
  } else {
    const id = Math.floor(Math.random() * 1000);
    STAFF.push({
      staff_id: parseInt(staff_id),
      staff_name: staff_name,
      staff_pass: staff_pass,
    });
    console.log(STAFF);
    res.json({ message: "Registered successfully" });
  }
});

app.post("/login", (req, res) => {
  const { staff_id, staff_pass } = req.body;
  const staff = STAFF.find(
    (a) => a.staff_id === parseInt(staff_id) && a.staff_pass === staff_pass
  );
  if (staff) {
    const token = jwt.sign(
      { staff_id: staff.staff_id, staff_name: staff.staff_name, role: "staff" },
      SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({
      message: "Logged in successfully",
      token,
    });
  } else {
    res.status(403).json({ message: "Authentication failed" });
  }
});

app.get("/staff/me", staffAuth, (req, res) => {
  res.json({ message: "Success", user: req.user });
});

app.get("/staff/timetable", staffAuth, (req, res) => {
  const timetable = [];
  pool.query(
    "call emsdb.staff_timetable(?)",
    [req.user.staff_id],
    (err, response) => {
      response[0].map((data) => {
        timetable.push(data);
      });
      res.json({ message: "Success", timetable: timetable });
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
