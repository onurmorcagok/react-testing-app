export const FormValidation = ({ firstName, lastName, email, password }) => {
  if (!firstName) {
    return "Name is required!";
  }
  if (!lastName) {
    return "Surname is required!";
  }
  if (!password) {
    return "Password is required!";
  }
  if (!email) {
    return "Email is required!";
  }
  if (password.length < 6) {
    return "Password is easy, please min 6 character is entry!";
  }
  if (!email.includes("@")) {
    return "Email is not correctly!";
  }

  return false;
};
