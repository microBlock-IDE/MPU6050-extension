({
    name: "MPU6050", // Category Name
    description: "6-Axis (Gyro + Accelerometer) MEMS MotionTracking Devices",
    author: "microBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "mpu6050_init",
        "mpu6050_update",
        "mpu6050_get_acc",
        "mpu6050_get_gyro",
        "mpu6050_get_temp"
    ]
});
