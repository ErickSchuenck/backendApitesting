import axios from "axios";
import { URL, CONFIG } from "../config/config.js";

export default async function getAllProducts(req, res) {
  try {
    const response = await axios.get(`${URL}/api/cpq/products`, CONFIG);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Could not Connect to Api",
    });
  }
}
