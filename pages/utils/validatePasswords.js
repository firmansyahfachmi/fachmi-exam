export const validatePassword = (password) => {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  if (!uppercaseRegex.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }

  if (!lowercaseRegex.test(password)) {
    return 'Password must contain at least one lowercase letter.';
  }

  if (!numberRegex.test(password)) {
    return 'Password must contain at least one number.';
  }

  if (!symbolRegex.test(password)) {
    return 'Password must contain at least one symbol.';
  }

  return null;
};
