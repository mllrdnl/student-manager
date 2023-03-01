import connectMongo from "../../../database/conn";
import {
  putStudent,
  deleteStudent,
  getStudent,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  //type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getStudent(req, res);
      break;
    case "PUT":
      putStudent(req, res);
      break;
    case "DELETE":
      deleteStudent(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
