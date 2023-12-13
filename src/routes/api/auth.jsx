import express from 'express';


function validateUserCredentials(email, password) {
    return email === password === "admin";
}
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const isValid = validateUserCredentials(email, password);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // If the credentials are valid, create a session or token here

  return res.status(200).json({ message: 'Login successful' });
});

export default router;