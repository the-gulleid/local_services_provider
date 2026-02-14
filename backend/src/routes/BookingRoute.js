const express = require('express');
const {
  createBooking,
  acceptBooking,
  rejectBooking,
  completeBooking,
} = require('../controllers/bookingController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.put("/:id/accept", authMiddleware, roleMiddleware('provider'), acceptBooking);
router.put("/:id/reject", authMiddleware, roleMiddleware('provider'), rejectBooking);
router.put("/:id/complete", authMiddleware, roleMiddleware('provider'), completeBooking);

module.exports = router;
