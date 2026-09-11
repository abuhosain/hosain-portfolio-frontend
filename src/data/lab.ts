export interface LabProject {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  concept: string;
  hardware: string[];
  firmware: string[];
  telemetryMetrics: {
    label: string;
    value: string;
    unit: string;
    status: "optimal" | "active" | "standby";
    change?: string;
  }[];
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
  terminalLogs: string[];
}

export const labData: LabProject = {
  id: "smartfishbreeder",
  name: "SmartFishBreeder",
  badge: "Hardware & IoT Research",
  subtitle: "Automated Aquaculture Telemetry & Aquatic Ecosystem Controller",
  concept: "An autonomous, connected aquatic breeding ecosystem designed to eliminate manual intervention in aquarium management. It orchestrates water quality telemetry, servo-driven feeder mechanics, and thermal equilibrium through cloud-synced ESP32 firmware.",
  hardware: [
    "ESP32-WROOM-32 Microcontroller",
    "DS18B20 Waterproof Temperature Sensor",
    "Analog pH Sensor Probe Kit (0–14 pH)",
    "SG90 Micro Servo (Automated Feeding Hatch)",
    "4-Channel 5V Relay Module (Pumps & Aeration)",
    "16x2 I2C Liquid Crystal Display",
    "12V DC Water Solenoid Valves",
  ],
  firmware: [
    "FreeRTOS Dual-Core Task Scheduling",
    "WiFi Reconnection & Offline Ring-Buffer State",
    "Firebase Realtime Database REST Ingestion",
    "EEPROM Calibration Memory",
  ],
  telemetryMetrics: [
    { label: "Water Temperature", value: "26.4", unit: "°C", status: "optimal", change: "±0.2°C nominal" },
    { label: "Acidity / pH Level", value: "7.15", unit: "pH", status: "optimal", change: "Neutral balance" },
    { label: "Feeder Servo Gate", value: "0°", unit: "Closed", status: "standby", change: "Next cycle: 18:00" },
    { label: "Aerator & Filter Pump", value: "Active", unit: "Relay 1", status: "active", change: "Flow: 120 L/h" },
    { label: "Cloud Sync Latency", value: "48", unit: "ms", status: "optimal", change: "Firebase RTDB" },
    { label: "Microcontroller Uptime", value: "99.98", unit: "%", status: "optimal", change: "Dual-core FreeRTOS" },
  ],
  features: [
    {
      title: "Real-Time Telemetry Stream",
      desc: "Sub-second continuous sensor streaming from ESP32 to cloud database with threshold alert triggers.",
      icon: "Activity",
    },
    {
      title: "Automated Precision Feeding",
      desc: "Servo-actuated measured dispensing with custom portion control and anti-jamming micro-sweeps.",
      icon: "Clock",
    },
    {
      title: "Closed-Loop Water Management",
      desc: "Relay automation activates drainage valves and fresh-water replenishment when pH or clarity degrades.",
      icon: "Droplets",
    },
    {
      title: "Cloud-to-Hardware Control",
      desc: "Manual remote override triggers from any web browser or mobile phone via instant WebSocket/Firebase pipe.",
      icon: "Radio",
    },
  ],
  terminalLogs: [
    "[BOOT] ESP32 Core 1 initialized: RTOS Kernel v10.4.3",
    "[WIFI] Connected to AP with RSSI -54dBm (IP: 192.168.1.142)",
    "[I2C] LCD 16x2 Display attached at address 0x27",
    "[SENSORS] DS18B20 Temp reading: 26.4°C | pH probe calibrated (7.15 pH)",
    "[FIREBASE] Realtime DB handshake OK — Token refreshed",
    "[RELAY] Pump Relay #1 ENGAGED — Aeration nominal",
    "[SERVO] Hatch calibrated to 0° resting state",
    "[STATUS] Telemetry loop running: 1000ms tick cycle",
  ],
};
