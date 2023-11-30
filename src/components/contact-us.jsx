import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs = () => {
  const { loggedInUser } = useContext(UserContext);

  return <div className="contact-us">{loggedInUser}</div>;
};

export default ContactUs;
