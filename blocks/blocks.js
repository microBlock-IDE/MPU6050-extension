Blockly.defineBlocksWithJsonArray(
[{
  "type": "mpu6050_init",
  "message0": "MPU6050 setup with address %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "addr",
      "options": [
        [
          "0x68",
          "0x68"
        ],
        [
          "0x69",
          "0x69"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mpu6050_update",
  "message0": "MPU6050 update data",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mpu6050_get_acc",
  "message0": "MPU6050 get acceleration %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "axis",
      "options": [
        [
          "x",
          "0"
        ],
        [
          "y",
          "1"
        ],
        [
          "z",
          "2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mpu6050_get_gyro",
  "message0": "MPU6050 get gyro %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "axis",
      "options": [
        [
          "x",
          "0"
        ],
        [
          "y",
          "1"
        ],
        [
          "z",
          "2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mpu6050_get_temp",
  "message0": "MPU6050 get temperature",
  "output": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
}]
);
