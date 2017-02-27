Emplacement des templates et fichiers sources
==
html/sites/all/themes/


Vider le cache
==
se placer dans /html

<code>$ drush cc all</code>

Obtenir le lien de l'admin pour la contrib
==
<code>$ drush uli</code>


modifier les locals settings (bdd, etc ...)
==
html/sites/default/local.settings.php

update de la base de données
==
<code>drush @alias_de_linstance updb</code>

Pour obtenir la liste des alias :

<code>$ drush sa</code>


Récupérer modifs de l'admin
==
<code>$ drush @alias_de_linstance fra</code>

Voir les templates appelés
==
<code>$ drush @alias_de_linstance vset theme_debug 1</code>

Modifier l'url de la page accueil
==
/admin/config/system/site-information

mettre les preprocess a false
==
dans local.settings.php



// Turn off js and css aggregation ON

$conf['preprocess_css'] = FALSE;

$conf['preprocess_js'] = FALSE;

