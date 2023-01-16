# My Drawing board

Well... to be fair, this is more like a painting canvas. You can change the "brush" color and canvas dimensions.

This drawing board is a based on the etch-a-sketch.

Coded using HTML, CSS and JavaScript.

Live preview at: https://thericardoac.github.io/drawing-board/

## The way to use the drawing board just changed!
Since the original way to use the canvas (just hovering to paint) causes
the user to start painting as soon as it enters the canvas, it was
considered to implement a click-and-drag feature to paint inside the canvas, but
it introduced a bug where if the user, not knowing, clicks-and-drags the
invisible dot border, it will continue to paint/erase even if the user is no longer holding the mouse click.

Because of both methods having disadvantages, it is that now, the canvas
will be used with a click-to-toggle function, requiring the user to click
inside the canvas to start using it and click again to stop. User can
double click to paint/erase a single dot.
