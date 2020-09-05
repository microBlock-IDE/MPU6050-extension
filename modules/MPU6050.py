class MPU6050():
    def __init__(self, i2c, addr=0x68):
        self.iic = i2c
        self.addr = addr
        self.iic.writeto(self.addr, bytearray([107, 0]))
        self.acc = [ 0, 0, 0 ]
        self.gyro = [ 0, 0, 0 ]
        self.temp = 0
    
    def b2i(self, x, y):
        return (x << 8 | y) if not x & 0x80 else (-(((x ^ 255) << 8) | (y ^ 255) + 1))

    def update(self):
        a = self.iic.readfrom_mem(self.addr, 0x3B, 14)
        for i in range(3):
            self.acc[i] = self.b2i(a[(i * 2)], a[(i * 2) + 1])
        self.temp = self.b2i(a[6], a[7]) / 340.00 + 36.53
        for i in range(3):
            self.gyro[i] = self.b2i(a[(i * 2) + 8], a[(i * 2) + 9])
