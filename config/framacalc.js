f$_config = 'local';

if(f$_page('framacalc.org/_start')) {
    // Si on est sur la page d'accueil
    f$_modal_don_txtdl1 = 'd’utiliser';
    f$_modal_don_txtdl2 = 'créer un calc';
    f$_modal_don_liendl = 'a[href*="framacalc.org/"]';
    
    f$_footer = "true";

} else {
    f$_jquery ='fQuery';
    // Si on n'est dans ethercalc
    if (f$_not_in_frame) {
        f$_extra_css = true;
    } else {
        f$_bootstrap_css = false;
    }
    f$_responsive = false;

    // Force la désactivation des fenêtres modales, du bandeau et du macaron
    f$_alert_text = '';
    f$_alert_modal_title = 'Avertissements';
    f$_alert_modal_text = "<h3>Suppression automatique</h3><p>Votre calc sera supprimé au bout d'un an d'inactivité (aucun accès, aucune modification pendant un an).<br/>Ceci nous permet d'éviter de faire grossir indéfiniment la base de données.</p><h3>Information</h3><p>Nous avons changé d'instance de Framacalc le 11 février 2015 suite à des bugs répétés. Pour retrouver votre calc, il vous faudra vous rendre sur <span style='white-space: nowrap;'>http://old.framacalc.org/le_nom_de_mon_calc</span></p><p>Pour exporter votre calc au format CSV, il suffit d'ajouter \".csv\" à la fin de l'adresse du calc (<span style='white-space: nowrap;'>https://framacalc.org/le_nom_de_mon_calc.csv</span>, <span style='white-space: nowrap;'>http://old.framacalc.org/le_nom_de_mon_calc.csv</span> pour l'ancienne instance)</p>";
    f$_modal_don_liendl = '';
    f$_donate = false;
    f$_alert_modal_cookie_name = 'nav-alert-modal-warning-framacalc';
}

f$_host = 'ovh';
