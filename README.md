# Drawing board
![drawing-tile](https://user-images.githubusercontent.com/112439514/215011992-9713f16a-28df-46b9-a316-a3cae67a50a2.jpg)

## Description 🖌 🎨
Drawing board or painting canvas, call it like you want and let your imagination flow!
This project is based on the etch-a-sketch. Coded from scratch using HTML, CSS and JavaScript.

## Live preview here 💻
https://thericardoac.github.io/drawing-board/

## Why did the way to use it change? ❓ 📄
Since the original way to use the canvas (just hovering to paint) causes
the user to start painting as soon as it enters the canvas, it was
considered to implement a click-and-drag feature to paint inside the canvas, but
it introduced a bug where if the user, not knowing, click-and-drags the
invisible dot border, it will continue to paint/erase even if the user is no longer holding the mouse click.

Because of both methods having disadvantages, it is that now, the canvas
will be used with a click-to-toggle function, requiring the user to click
inside the canvas to start using it and click again to stop. User can
double click to paint/erase a single dot.
