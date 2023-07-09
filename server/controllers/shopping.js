import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const createInsight = async (req, res) => {
  try {
    const response = await axios.post(
      "https://openapi.naver.com/v1/datalab/shopping/category/keyword/age",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": process.env.CLIENT_ID,
          "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 오류" });
  }
};
