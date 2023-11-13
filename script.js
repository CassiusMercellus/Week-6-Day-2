$(document).ready(function () {
    // Function to generate the grid
    function generateGrid(rows, cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const box = $('<div class="box"></div>');
                box.appendTo('#grid-container');
            }
        }
    }

    // Generate a 4x4 grid
    generateGrid(4, 4);

    // Toggle background color on click
    $('#grid-container').on('click', '.box', function () {
        const currentColor = $(this).css('background-color');
        const newColor = currentColor === 'rgba(0, 0, 0, 0)' ? 'grey' : 'transparent';
        $(this).css('background-color', newColor);
    });
});
