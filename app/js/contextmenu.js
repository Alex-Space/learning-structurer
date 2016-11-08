jQuery(document).ready(function($) {
    $('.jstree-default-dark').on('contextmenu', 'a', function(e) {
        e.preventDefault();
        const elemId = $(this).attr('id');

        $('.contextmenu').remove();

        $('body').append(`
            <nav data-elem-id="${elemId}" class="contextmenu">
                <ul class="contextmenu-list" style="left: ${e.clientX}px; top: ${e.clientY-15}px;">
                    <li class="context-new">New node</li>
                    <li class="context-rename">Rename</li>
                    <li class="context-remove">Remove</li>
                </ul>
            </nav>
        `);
        return false;
    });

    // Remove contextmenu
    $('body').on('click contextmenu', function() {
        $('.contextmenu').remove();
    });

    // Rename
    $('.context-rename').on('click', function() {
        const elemId = $(this).parents('nav').data('elem-id');
    });

    // $('body').on('set_text.jstree', function() {
    //     console.log(123);
    // });
});
