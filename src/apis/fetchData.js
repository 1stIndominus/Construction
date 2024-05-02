import Axios from "axios";

const TELEGRAM_TOKEN = "6101425309:AAHK9A_49b2tMjgjqCA2Xp8N7feCcy1nIKA";
const TELEGRAM_CHAT_ID = "-1001874127252";
const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export const postDataFromInputsToTelegram = (
  message
) => {
  try {
    Axios.post(URI_API, {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
};
