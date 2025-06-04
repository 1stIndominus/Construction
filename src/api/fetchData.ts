import Axios from "axios";

import { TELEGRAM_CHAT_ID, URI_API } from "../constants";

type PostDataFromInputsToTelegram = {
  event: React.FormEvent<HTMLFormElement>;
  userName: string;
  email: string;
  question: string;
};

export const postDataFromInputsToTelegram = (
  data: PostDataFromInputsToTelegram | string
) => {
  try {
    Axios.post(URI_API, {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: data,
    });
  } catch (error) {
    console.log(error);
  }
};
