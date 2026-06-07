require("dotenv").config();
console.log("Token length:", process.env.ADMIN_INVITE_TOKEN.length);
console.log("Token value:", JSON.stringify(process.env.ADMIN_INVITE_TOKEN));
