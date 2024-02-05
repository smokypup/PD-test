const express = require('express')
const router = express.Router()

router.use(bodyParser.json());

// In-memory storage for device data (replace this with a database in a real-world scenario)
let deviceData = [];

// Endpoint to add a new device ID
router.post('/api/devices', (req, res) => {
  const { deviceId } = req.body;
  if (!deviceId) {
    return res.status(400).json({ error: 'Device ID is required' });
  }

  deviceData.push(deviceId);
  res.json({ success: true, deviceData });
});

// Endpoint to get all devices
router.get('/api/devices', (req, res) => {
  res.json({ deviceData });
});

// Endpoint to remove a device by ID
router.delete('/api/devices/:deviceId', (req, res) => {
  const { deviceId } = req.params;
  deviceData = deviceData.filter((id) => id !== deviceId);
  res.json({ success: true, deviceData });
});

module.exports = router