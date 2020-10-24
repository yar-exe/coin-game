game.startCountdown(40000)
game.setScore(0)
let COIN = game.createSprite(randint(0, 4), randint(0, 4))
COIN.change(LedSpriteProperty.Brightness, 180)
let CHAR = game.createSprite(2, 2)
while (true) {
    if (COIN.isTouching(CHAR)) {
        game.addScore(1)
        COIN.change(LedSpriteProperty.X, randint(0, 4))
        COIN.change(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        CHAR.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        CHAR.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        CHAR.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        CHAR.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
