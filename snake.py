import random
import arcade
import arcade.key

# Définition des couleurs
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLACK = (0, 0, 0)

# Définition de la taille du serpent
SNAKE_SIZE = 10
# Définition de la taille de la pomme
APPLE_SIZE = 10
# Définition de la vitesse du serpent
SNAKE_SPEED = 10
# Définition de la vitesse de la pomme
APPLE_SPEED = 5
# Initialisation de la fenêtre
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 400
WINDOW_TITLE = "Snake Game"


# Créer une pomme à une position aléatoire
def generate_apple(snake_body, screen_width, screen_height):
    while True:
        apple_x = random.randint(0, screen_width - 1) * SNAKE_SIZE
        apple_y = random.randint(0, screen_height - 1) * SNAKE_SIZE
        # Vérifier que la pomme ne tombe pas sur le serpent
        if (apple_x, apple_y) not in snake_body:
            return (apple_x, apple_y)

def change_direction(key, current_direction):
    if key == 'Up' and current_direction != 'Down':
        return 'Up'
    elif key == 'Down' and current_direction != 'Up':
        return 'Down'
    elif key == 'Left' and current_direction != 'Right':
        return 'Left'
    elif key == 'Right' and current_direction != 'Left':
        return 'Right'
    return current_direction

# Exemple pour déplacer le serpent
def move_snake(snake_body, direction):
    head = snake_body[0]
    if direction == 'Up':
        new_head = (head[0], head[1] - 1)
    elif direction == 'Down':
        new_head = (head[0], head[1] + 1)
    elif direction == 'Left':
        new_head = (head[0] - 1, head[1])
    elif direction == 'Right':
        new_head = (head[0] + 1, head[1])

    # Ajouter la nouvelle tête en début de liste
    snake_body.insert(0, new_head)
    # Supprimer la dernière partie du serpent (si pas de pomme mangée)
    snake_body.pop()


# Vérifier si le serpent touche les bords
def check_wall_collision(snake_head, screen_width, screen_height):
    x, y = snake_head
    if x < 0 or x >= screen_width or y < 0 or y >= screen_height:
        return True
    return False

# Vérifier si le serpent mange une pomme
def check_apple_collision(snake_head, apple_position):
    if snake_head == apple_position:
        return True
    return False

# Si le serpent mange la pomme, agrandir le serpent
def grow_snake(snake_body):
    # Ajoute un segment au serpent
    snake_body.append(snake_body[-1])

# Exemple d'affichage du score
def display_score(window, score):
    arcade.draw_text(f"Score: {score}", 10, 10, arcade.color.BLACK, 14)

# Message de fin de jeu
def game_over(window, score):
    arcade.draw_text(f"Game Over! Final Score: {score}", 100, 100, arcade.color.BLACK, 20)


class SnakeGame(arcade.Window):
    def __init__(self):
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, WINDOW_TITLE)
        arcade.set_background_color(arcade.color.WHITE)
        self.score = 0
        self.snake_body = [(10, 10), (11, 10), (12, 10)]
        self.apple_position = generate_apple(self.snake_body, SCREEN_WIDTH // 10, SCREEN_HEIGHT // 10)
        self.current_direction = 'Right'

    def on_draw(self):
        arcade.start_render()
        # Dessiner le score
        display_score(self, self.score)
        # Dessiner la pomme
        arcade.draw_circle_filled(self.apple_position[0] * SNAKE_SIZE, self.apple_position[1] * SNAKE_SIZE, APPLE_SIZE // 2, arcade.color.RED)
        # Dessiner le serpent
        for segment in self.snake_body:
            arcade.draw_circle_filled(segment[0] * SNAKE_SIZE, segment[1] * SNAKE_SIZE, SNAKE_SIZE // 2, arcade.color.GREEN)

    def on_update(self, delta_time):
        # Déplacer le serpent
        move_snake(self.snake_body, self.current_direction)
        # Vérifier les collisions
        if check_wall_collision(self.snake_body[0], SCREEN_WIDTH // 10, SCREEN_HEIGHT // 10):
            game_over(self, self.score)
            arcade.close_window()
        if check_apple_collision(self.snake_body[0], self.apple_position):
            self.score += 1
            grow_snake(self.snake_body)
            self.apple_position = generate_apple(self.snake_body, SCREEN_WIDTH // 10, SCREEN_HEIGHT // 10)

    def on_key_press(self, key, modifiers):
        # Changer la direction en fonction de la touche pressée
        if key == arcade.key.UP:
            self.current_direction = change_direction('Up', self.current_direction)
        elif key == arcade.key.DOWN:
            self.current_direction = change_direction('Down', self.current_direction)
        elif key == arcade.key.LEFT:
            self.current_direction = change_direction('Left', self.current_direction)
        elif key == arcade.key.RIGHT:
            self.current_direction = change_direction('Right', self.current_direction)

if __name__ == "__main__":
    game = SnakeGame()
    arcade.run()
    # Fermer la fenêtre après la fin du jeu
    arcade.close_window()
    # Fermer la fenêtre après la fin du jeu


