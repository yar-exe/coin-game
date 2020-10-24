game.start_countdown(40000)
game.set_score(0)
COIN = game.create_sprite(randint(0, 4), randint(0, 4))
COIN.change(LedSpriteProperty.BRIGHTNESS, 180)
CHAR = game.create_sprite(2, 2)
while True:
    if COIN.is_touching(CHAR):
        game.add_score(1)
        COIN.change(LedSpriteProperty.X, randint(0, 4))
        COIN.change(LedSpriteProperty.Y, randint(0, 4))
    if input.acceleration(Dimension.X) > 0:
        CHAR.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    if input.acceleration(Dimension.X) < 0:
        CHAR.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    if input.acceleration(Dimension.Y) > 0:
        CHAR.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    if input.acceleration(Dimension.Y) < 0:
        CHAR.change(LedSpriteProperty.Y, -1)
        basic.pause(100)