Blockly.Python['servo'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=50).duty(int(25.57 + (((${value_angle}) / 180.0) * 102.3)))\n`;
  return code;
};

Blockly.Python['mpu6050_init'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_i2c'] = 'from machine import I2C';
  Blockly.Python.definitions_['from_mpu6050_import_mpu6050'] = 'from MPU6050 import MPU6050';

  var dropdown_addr = block.getFieldValue('addr');
  var code = `mpu = MPU6050(I2C(0, scl=Pin(22), sda=Pin(21), freq=100000), ${dropdown_addr})\n`;
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
