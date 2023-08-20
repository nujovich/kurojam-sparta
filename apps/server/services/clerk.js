const Clerk = require("@clerk/clerk-sdk-node/cjs/instance").default;

const clerk = new Clerk({ secretKey: process.env.CLERK_API_KEY });

exports.getUser = async (id) => clerk.users.getUser(id);
