function createLoginTracker(userInfo) {
  // Step 1: Initialize attempt counter variable inside the outer function scope
  let attemptCount = 0;

  // Step 1 & 2: Define and return the inner arrow function (Closure)
  return (passwordAttempt) => {
    // Increment attemptCount each time the returned arrow function is called
    attemptCount++;

    // Check if the account is already locked due to exceeding 3 attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check if the password attempt matches userInfo.password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

// Export for Jest unit tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = createLoginTracker;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};