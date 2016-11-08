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
    $('body').on('click', '.context-rename', function() {
        const elemId = $(this).parents('nav').data('elem-id');
        $('body').append(`
            <div class="rename-popup">
                <div class="dark-bg-popup"></div>
                <div class="rename-popup-inner">
                    <i class="app-icons app-icons-small i-close"></i>
                    <input class="input-general" type="text" value="` + document.getElementById(elemId).innerText + `">
                    <button class="ok-btn">OK</button>
                </div>
            </div>
        `);
        $('.rename-popup-inner input').select();

        // Confirm rename operation
        $('.rename-popup-inner .ok-btn').on('click', function() {
            const value = $('.rename-popup-inner input').val();
            $('#'+elemId).html(document.getElementById(elemId).childNodes[0]).append(value);
            $('.rename-popup').remove();
        });
        $('.rename-popup-inner input').keyup(function(event){
            if (event.keyCode == 13){
                const value = $('.rename-popup-inner input').val();
                $('#'+elemId).html(document.getElementById(elemId).childNodes[0]).append(value);
                $('.rename-popup').remove();
            }
        });

    });

    // Close rename popup
    $('body').on('click', '.rename-popup-inner i, .dark-bg-popup', function() {
        $('.rename-popup').remove();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            if ( $('.rename-popup').length > 0 ) {
                $('.rename-popup').remove();
            }
        }
    });
});
