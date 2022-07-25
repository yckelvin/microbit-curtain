def on_button_pressed_a():
    global degree2
    degree2 += -1
    degree2 = max(0, degree2)
    ShowTemperature(degree2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global degree2
    degree2 += 1
    degree2 = min(25, degree2)
    ShowTemperature(degree2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def ShowTemperature(degree: number):
    global row, y, x2
    basic.clear_screen()
    row = (degree - degree % 5) / 5
    while y <= row - 1:
        for x in range(6):
            led.plot(x, 4 - y)
        y += 1
    while x2 <= degree % 5 - 1:
        y2 = 0
        led.plot(x2, 4 - row - y2)
        x2 += 1
x2 = 0
y = 0
row = 0
degree2 = 0
degree2 = 0