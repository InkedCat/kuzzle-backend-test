# Developper Expérience

La stack Kuzzle se base sur des technologies  **modernes** et  **populaires**, cela peut complexifier son installation.
De plus, de multiples dépendances sont nécessaires à son installation :  **C++, Make et Python**.

C'est pourquoi le CLI dédié :  **Kourou**, existe. Il permet d'**abstraire** et de **simplifier** l'installation et la configuration de la stack pour les développeurs.

Kourou permet de, premièrement, **installer** la stack complète en une commande, et, deuxièmement, de **configurer** un large panel de fonctionnalités proposé par la stack, tels que les index, les collection, etc...

Kourou semble, malheureusement, seulement fonctionner sur **Linux** pour le moment. Utilisant principallement **Windows**, pour des raisons de compatibilité logicielle, j'ai donc opté pour l'utilisation de **WSL**, à la suite de cela l'installation s'est faite sans accroc et en très peu de temps. Kuzzle étant une plateforme ciblant les **serveurs**, cela semble pertinent de ne pas complétement supporter Windows.

La création et la mise à disposition d'un tel outil permet de grandement améliorer la **DX**, n'importe quel développeur peut **rapidement** démarrer un projet sans se soucier de la configuration ou du déploiement de celui ci.

Une fonctionnalité **notable** est la disponibilité de certaines commandes telles que : `kourou collection:create`, `kourou document:create` et `kourou document:search`. Elles m'ont permis de rapidement et facilement me **familiariser** avec les fonctionnalités de Kuzzle, sans avoir **immédiatement** recours à l'utilisation du SDK ou à l'extension du Backend.


# Forme détaillée notification

Une notification contient généralement les informations suivantes :

- Le type de la notification : `type`
- Le controller qui a déclenché la notification : `controller`
- L'action qui a déclenché la notification : `action`
- Le type d'événement la notification : `event`
- Le nom de l'index source de la notification : `index`
- Le nom de la collection source de la notification : `collection`

Dépendant du type de notification, il est possible qu'elle contienne d'autre informations, comme par exemple pour une notification de document :

- Le document mis à jour qui a déclenché la notification : `result`
