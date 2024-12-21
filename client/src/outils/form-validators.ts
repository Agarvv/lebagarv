export const usernameValidation = {
  required: "Username is required",
};

export const emailValidation = {
  required: "Email is required",
  pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email format" },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: { value: 6, message: "Password must be at least 6 characters" },
};