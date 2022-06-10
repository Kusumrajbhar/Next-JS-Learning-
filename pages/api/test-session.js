import { getSession } from "next-auth/client";

//securing api routes

export default async (req, res) => {
  const session = await getSession({ req }); //req:req
  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  } else {
    res.status(200).json({ message: "success", session });
  }
};
