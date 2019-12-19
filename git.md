Reset le dernier commit
==
<code>$git reset HEAD~1 </code>

Reset le dernier merge
==
<code>$ git reset --keep ORIG_HEAD </code>

Récupérer une branche
==
<code>$ git fetch</code>

<code>$ git checkout -t origin/nom-de-la-branche</code>


Créer une branche
==
<code>$ git branch maBranche</code>


Récupérer Diff de master
==
<code>$ git checkout master</code>

<code>$ git remote update</code>

<code>$ git pull origin master</code>

<code>$ git checkout mabranche</code>

<code>$ git merge master</code>



Pousser une branche
==
<code>$ git push origin maBranche</code>



supprimer une branche
==
<code>$ git branch -d maBranche</code>


Reset une branche au dernier commit
==
<code>$ git reset --hard origin/maBranche</code>

Ajouter un fichier que l'on a supprimé
==
<code>$ git rm /monFichier</code>

Faire un pull alors que l'on a des modifs en cours avec rebase
==
<code>$ git pull --rebase origin master</code>
l'option rebase permet de réappliquer ses modifs après le pull

Récupérer des branches qu'on ne voit pas
==
<code>$ git branch -r</code>

Résoudre un conflit
==
$ git checkout --ours assets/css/index.css

ajouter toute type de modif sur git
==
git add -u

Résoudre les soucis des noms de fichiers trop long
==
git config --system core.longpaths true
