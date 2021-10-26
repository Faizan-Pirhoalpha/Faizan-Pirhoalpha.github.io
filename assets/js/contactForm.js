const BASE_URL = "https://pirhoalpha.com";

/**
 * Post the website enquiry form to the server
 */
const postContactForm = async () => {
  const errorDiv = document.getElementById("contact-form__error");
  try {
    const name = document.getElementById("contact-form__name").value;
    const email = document.getElementById("contact-form__email").value;
    const mobile_number = document.getElementById("contact-form__mobile-number")
      .value;
    const message = document.getElementById("contact-form__message").value;
    if (name && email && mobile_number && message) {
      const body = {
        name,
        email,
        mobile_number,
        message
      };
      const postUrl = BASE_URL + "/admin/api/register/web/user/info/";
      const response = await axios.post(postUrl, body);
      const { status } = response.data;
      if (!status) throw new Error("Failed!");
    } else throw new Error("Some form fields are invalid!");
    $("#contactForm").modal("hide");
  } catch (err) {
    console.error(err);
    errorDiv.innerText = err.toString();
    errorDiv.style.color = "red";
  }
};
