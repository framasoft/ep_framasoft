f$_config = 'local';

f$_modal_don_txtdl1 = 'd’utiliser';
f$_modal_don_txtdl2 = 'créer un sondage';
f$_modal_don_liendl = 'a[href*="infos_sondage.php?choix_sondage="]';

f$_jquery = 'html';
f$_bootstrap_js = 'html';

// Opt-in
if(f$_page('infos_sondage.php?choix_sondage')) {
    f$_email_field1 = '#formulaire input[name="adresse"]';
}

f$_footer = true;

// Somme des votes (fonctionnalité de la branche develop)
if(window.location.host == 'framadate.org') {
    jQuery(document).ready(function(){
        // Graphique
        if(jQuery('html').attr('lang')=='fr') {
            jQuery('tr#addition td:eq(0)').append('<br/>'+(jQuery('#tableContainer tbody tr').length-2)+' votants');
            jQuery.getScript('/_charts/resultats.js');
        }
        // Somme des votes (fonctionnalité de la branche develop)
        jQuery('tr#addition td').each(function(index) {
            countIfneedbe = jQuery('#tableContainer tbody td.bg-warning[headers]').filter('[headers$="S'+(index-1)+'"],[headers$="H'+(index-1)+'"]').length;
            if(countIfneedbe>0) {
                jQuery(this).append('<br/><span class="small text-muted">(+'+countIfneedbe+')</span>');
            }
        });
        // Tutoriel
        if(jQuery('html').attr('lang')=='fr') {
            jQuery('a[href*="aqg259dth55iuhwm"]').before('<a href="javascript:void(0)" data-toggle="modal" data-target="#TutoModal">lire le tutoriel détaillé ?</a> ou ');
            jQuery('main .col-md-4:has(.glyphicon-question-sign)').append(
            '<div class="modal fade" id="TutoModal" tabindex="-1" role="dialog" aria-labelledby="TutoModalLabel">'+
                '<div class="modal-dialog modal-lg">'+
                     '<div class="modal-content">'+
                          '<div class="modal-header">'+
                               '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                               '<h4 class="modal-title" id="TutoModalLabel">Planifier un rendez-vous rapidement avec Framadate</h4>'+
                          '</div>'+
                          '<div class="modal-body" id="TutoImport">'+
                          '</div>'+
                          '<div class="modal-footer">'+
                              '<button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>'+
                          '</div>'+    
                     '</div>'+
                '</div>'+
            '</div>'
            );
            jQuery('#TutoImport').load("_tutoriel/tutoframadate.html .row", function() {
                jQuery( "#TutoImport img" ).attr( "src", function( i, val ) {
                    return '_tutoriel/'+ val;
                });
                jQuery( "#TutoImport .row" ).after('<hr role="presentation" />');
            });
        }
    });
}