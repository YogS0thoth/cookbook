Emplacement des templates et fichiers sources:
==
/app/ressources/views/


URL sans cache des templates symfony
==
app_dev.php/


Après un pull, si des erreurs sont visibles et que l'instance n'est pas à jour et/ou 'cassée'
==
faire un 'after pull' afin de remettre d'équerre l'instance
<code>$  ./after_pull.sh</code>

Emplacement du fichier de config (bdd,...)
==
app/config/parameters.yml

Connaitre tous les éléments d'un formualire
==
{% dump(form) %}

==

vider le cache

rm -rf app/cache/*
