import messagesInEn from "../Component/lang/en";
import messagesInFa from "../Component/lang/fa";

export const messagesFn = (lang) => {
  console.log("lang", lang);
  if (lang === "fa") {
    return messagesInFa;
  } else {
    return messagesInEn;
  }
};
