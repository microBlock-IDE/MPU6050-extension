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
