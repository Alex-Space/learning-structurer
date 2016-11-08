jQuery(document).ready(function($) {
    $(function() {
        $('.jstree-nav').jstree({
          "core" : { // core options go here
            "multiple" : false, // no multiselection
            "themes" : {
              "dots" : false // no connecting dots between dots
            }
          },
          "plugins" : ["state", "search"],
        });
    });
});
