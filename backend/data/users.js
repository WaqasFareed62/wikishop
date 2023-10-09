import bcrypt from "bcryptjs";

const user = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234", 10),
    role: true,
  },
  {
    name: "waqas",
    email: "waqas@admin.com",
    password: bcrypt.hashSync("123456", 10),
    role: false,
  },
  {
    name: "sohaib",
    email: "sobi@admin.com", 
    password: bcrypt.hashSync("1234", 10),
    role: false,
  },
];

export default user;
