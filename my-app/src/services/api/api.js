import axios from "axios";

const BASE_URL = "http://a0830433.xsph.ru/"

const instance = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getMessages: async (lastMessageId) => {
    const bodyFormData = new FormData();
    bodyFormData.append("actionName", "MessagesLoad")
    bodyFormData.append("messageId", lastMessageId)

    const response = await instance.post("", bodyFormData, {
      headers: {"Content-Type": "multipart/form-data"},
    })

    return response.data.Messages;
  },
  getOldMessages: async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("actionName", "MessagesLoad")
    bodyFormData.append("oldMessages", true)

    const response = await instance.post("", bodyFormData, {
      headers: {"Content-Type": "multipart/form-data"},
    })

    return response.data.Messages;
  },
}
