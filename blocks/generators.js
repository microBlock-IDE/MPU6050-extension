Blockly.Python['mpu6050_init'] = function(block) {
  Blockly.Python.definitions_['from_mpu6050_import_mpu6050'] = 'from MPU6050 import MPU6050';

  var dropdown_addr = block.getFieldValue('addr');
  var code = `mpu = MPU6050(${dropdown_addr})\n`;
  return code;
};

Blockly.Python['mpu6050_update'] = function(block) {
  var code = `mpu.update()\n`;
  return code;
};

Blockly.Python['mpu6050_get_acc'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var code = `mpu.acc[${dropdown_axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpu6050_get_gyro'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var code = `mpu.gyro[${dropdown_axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpu6050_get_temp'] = function(block) {
  var code = `mpu.temp`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.JavaScript['mpu6050_init'] = function(block) {
  Blockly.JavaScript.definitions_['include']['Wire.h'] = '#include <Wire.h>';
  Blockly.JavaScript.definitions_['include']['MPU6050.h'] = '#include <MPU6050.h>';
  
  var dropdown_addr = block.getFieldValue('addr');

  Blockly.JavaScript.definitions_['define']['mpu'] = `MPU6050 mpu(${dropdown_addr}, &Wire);`;
  
  var code = `Wire.begin();
mpu.initialize();
`;
  return code;
};

Blockly.JavaScript['mpu6050_update'] = function(block) {
  var code = ``;
  return code;
};

Blockly.JavaScript['mpu6050_get_acc'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');

  var code = "";
  if (dropdown_axis === "0") {
    code = "mpu.getAccelerationX()";
  } else if (dropdown_axis === "1") {
    code = "mpu.getAccelerationY()";
  } else if (dropdown_axis === "2") {
    code = "mpu.getAccelerationZ()";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mpu6050_get_gyro'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  
  var code = "";
  if (dropdown_axis === "0") {
    code = "mpu.getRotationX()";
  } else if (dropdown_axis === "1") {
    code = "mpu.getRotationY()";
  } else if (dropdown_axis === "2") {
    code = "mpu.getRotationZ()";
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mpu6050_get_temp'] = function(block) {
  var code = `mpu.getTemperature()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
