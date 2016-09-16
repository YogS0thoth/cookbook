Comment Générer une clé SSH ?
==
Pour vous connecter sur les différents serveurs, vous aurez besoin de générer votre clé SSH. Voici comment procéder :

Sur le terminal taper cette ligne de commande :

<code>$ ssh-keygen -t rsa -C "prenom.nom@xprimegroupe.com"</code>

Passer les demandes qui vont s'afficher à la suite : nommage, passphrase, etc, ...

Afficher la clé qui a été créée : 

<code>$ cat ~/.ssh/id_rsa.pub</code>

Copier la clé dans gitlab (Profile settings)
<br><br>

J'ai des erreurs de droit (CHMOD) lorsque je lance une commande GULP/GRUNT, que faire ?
==
Vous devez ajouter vos droits en écritures sur les fichiers à l'aide de la commande suivante :

<code>$ sudo add_droit_exec projet.alfa.serveur.local</code>

Ensuite lancer la commande clean :

<code>$ gulp clean</code>
<br><br>

Je ne vois pas mes modifications sur la page sur laquelle je travaille, pourquoi ?
==
Il faut penser à vider le cache du CMS

sur DRUPAL, taper cette commande dans votre terminal en vous positionnant sur /html :

<code>$ drush cc all</code>


sur SYMPHONY, il faut penser à se placer sur la vue app_dev.php/

ex : .alfa.bratislava.local/app_dev.php
<br><br>

Je ne vois TOUJOURS pas mes modifications sur la page sur laquelle je travaille, mais pourquoi ??
==
Il reste le cache du navigateur, Ctrl + F5 ne suffit pas ? Installez Clear Cache sur votre navigateur Chrome :

<https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn?utm_source=chrome-app-launcher-info-dialog>
<br><br>
Sur Symphony, penser à se mettre sur l'url développeur : site/app_dev.php

Comment retrouver le template qui affiche ma page ?
==
Si le module Devel de Drupal est installé, inspectez le code et repérez les commentaires insérés du type :

< ! -- BEGIN OUTPUT from 'sites/all/themes/movenpick_base/templates/region/region--bare.tpl.php' -->
<br><br>

J'aimerai faire des test sur différents devices ?
==
Il y a des tablettes et mobiles dans le buffet devant le bureau d'Anais
<br><br>

Je n'arrive pas à copier des fichiers, j'ai une erreur windows m'indiquant que les noms de fichier sont trop long ?
==
Faîtes le en ligne de commande :

<code>$ cp -r monRepertoireACopier ../../dossier/dossierDeDestination/</code>

Comment tester la compatibilité IE8 ?
==
Se connecter à la machine virtuelle IE8:

Utiliser Connexion bureau à distance

Ordinateur ie8-vm

User IE8-vm\IEUser

Mot de passe IE
