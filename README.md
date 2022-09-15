
# Exercice pour medoucine.com

## Le but est de réaliser une page fictive de réservation avec calendrier  

DEMO : [https://molokoloco.github.io/medoucine/public/](https://molokoloco.github.io/medoucine/public/)  
CODE : [https://github.com/molokoloco/medoucine/tree/main/public](https://github.com/molokoloco/medoucine/tree/main/public)  

**Demande client (à partir d'une image) :**  

![1](https://molokoloco.github.io/medoucine/public/img/medoucine1.png)

Le menu utilisateur a droite est un menu déroulant contenant les menu "mon compte" et "déconnexion"

**Gérer mon cabinet**  
Le bouton Gérer mon cabinet doit ouvrir la modale suivante :

![2](https://molokoloco.github.io/medoucine/public/img/medoucine2.png)

**Règles :**  
Il est possible de sélectionner plusieurs jours  
La date doit affiche un datepicker de votre choix (le plus beau possible) permettant de sélectionner une date  
Les heures de début et de fin doivent afficher un date picker (le plus beau) et en version mobile afficher une horloge  
Si "Créneaux récurrent" n'est pas sélectionné, les éléments du cadre rouge pâle ne sont plus visibles  
Le lieu de consultation est une liste déroulante à choix simple contenant les arrondissements de paris.  
Les boutons et tout autre éléments cliquables doivent avoir un design au hover, au click, et le curseur doit indiquer que l'élément est cliquable. 

**Gérer mes consultations**  
Le bouton "Gérer mes consultation" ouvre une page avec le même template contenant un formulaire avec un champs à sélection multiple :

![3](https://molokoloco.github.io/medoucine/public/img/medoucine3.png)

Ce champ devra avoir le même design qu'un champ à sélection simple, et les éléments à l'intérieur peuvent être customisés pour correspondre aux couleurs rouge et verte.
A chaque ajout d'élément dans la liste à choix multiple, un encart apparaît en dessous de la liste. Les encarts sont ordonnables (on peut glisser / déposer Psychothérapie en dessous de Hypnose. Hypnose deviendra 1 et psycho numéro 2.

![4](https://molokoloco.github.io/medoucine/public/img/medoucine4.png)

Le rendu devra se faire sous la forme d'un zip contenant les sources html, css et js (et image le cas échéant). Vous êtes libre d'utiliser les librairies que vous souhaitez.

---

**Réponse Julien G :**  

Je n'ai pas implémenté le serveur, ni webpack...
Je me suis concentré sur l'intégration en allant au plus simple et efficace.

~~Il me reste un bug lorsque que l'on efface un item dans les encarts ordonnables :
Il faut que je modifie le plugin de liste à choix multiple pour qu'il prenne en compte aussi cet élément effacé.~~  
Les encarts ordonnables ne semblent pas fonctionner en version mobile, à re-tester...  
Je dois améliorer la taille du switch pour qu'il soit un peu plus gros...  
~~J'ai utilisé 2 plugins, un datepicker et un timepicker, mais je pense qu'un seul aurait suffit, todo optim~~

Librairies et extensions JS utilisés :
* jQuery-3.6.1
* Moment-with-locales
* Bootstrap
* Bootstrap-datetimepicker2
* Selectpure
* jQuery-ui
* Fontawesome

Dites-moi ce que vous en pensez, je suis ouvert ^^