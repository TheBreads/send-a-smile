if (on_button_pressed_a2()) {
    function on_button_pressed_a2() {
        basic.clearScreen()
        radio.sendString("smile")
    }
    
    input.onButtonPressed(Button.A, on_button_pressed_a2)
}

