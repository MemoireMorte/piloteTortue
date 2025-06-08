# PiloteTortue

## 🐢 Introduction

La Tortue T3 Jeulin est un robot éducatif développé en France au début des années 1980 (1981) dans le cadre du Plan Informatique pour tous. Elle repose sur le célèbre langage Logo, et permettait aux élèves de cycles 3 de programmer des déplacements et des tracés géométriques simples, directement en classe.


- Objectif pédagogique : initier à la pensée algorithmique et à la logique via des exercices concrets : avancer, tourner, dessiner, etc.
- Technologie : châssis mobile équipé de moteurs pas à pas, contrôlé par carte perforée ou télécommande, une mini‑tortue motorisée autonome.
- Contexte : conçue pour l’enseignement primaire, elle représentait une approche innovante de l’éducation numérique à une époque où l’ordinateur familial n’était pas encore omniprésent


Ce projet a pour ambition de redonner vie à un robot emblématique, en re-donnant à la Tortue T3 sa vocation pédagogique, mais cette fois avec les outils du XXIᵉ siècle.


Il s'agit d'une web app qui reproduis virtuellement l'integralité des cartes initialement fournies avec le robot. Chaque carte représente une commande en LOGO. Elle se traduit par un caractère unique, envoyé en RS-232 à la télécommande, qui le transmet au mobile.


# How to

Le projet utilise [Angular](https://github.com/angular/angular-cli) version 20.0.1.
Vous devrez avoir installé [Node](https://nodejs.org) au préalable sur votre machine, version 20.11.1 minimum

## Lancer le service

À la racine, dans le dossier du projet:

```bash
npm run i
npm run start
```

L'app se lancera à l'adresse [http://localhost:4200/](http://localhost:4200/). 


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
