# 📘 Projet JavaScript – Plats du monde

## 🎯 Objectif de l’exercice

Dans cet exercice, tu vas créer une page web qui affiche une liste de plats du monde.

👉 Les données **ne sont pas écrites en HTML**, elles sont stockées dans un **fichier JSON**  
👉 Le contenu est **généré dynamiquement en JavaScript**

L’objectif principal n’est pas le design, mais de comprendre :
- comment lire des données depuis un fichier JSON
- comment créer du HTML avec JavaScript
- comment réfléchir avant de coder

---

## 🧩 Ce que fait l’application (version simple)

L’application doit :

- charger un fichier JSON avec `fetch`
- parcourir la liste des plats
- afficher chaque plat sous forme de carte
- afficher pour chaque plat :
  - son nom
  - son pays
  - son origine
  - sa liste d’ingrédients
  - son temps de préparation

⚠️ Le **header**, la **hero** et le **footer** sont déjà présents en HTML.  
👉 **Seule la liste des plats est générée en JavaScript.**

**Voici un exemple de code pour charger le fichier JSON :**
```
fetch("plats-du-monde.json")
  .then(response => response.json())
  .then(data => { 
    // code pour afficher les plats
  });

```

---

## 🛠️ Technologies utilisées

- HTML
- CSS
- JavaScript (DOM, fetch)
- JSON

Aucune librairie.  
Aucun framework.

---

## 🧠 Avant de coder : étape essentielle

⚠️ **Ne commence pas par écrire du code tout de suite.**

Avant de coder, prends le temps de :
- analyser le fichier JSON
- comprendre sa structure
- réfléchir aux étapes nécessaires pour afficher les plats

Ensuite, écris ton **pseudo-code**.

Le pseudo-code est une description du programme :
- en français (ou phrases simples)
- sans syntaxe JavaScript
- dans l’ordre logique d’exécution

---

## ✍️ Aide pour écrire ton pseudo-code

Pour t’aider, réponds par écrit aux questions suivantes :

1. Où se trouve le fichier JSON ?
  Dans le projet
2. Comment récupérer les données depuis ce fichier ?
  Avec un "fetch"
3. Où dans le HTML dois-je afficher les plats ?
  Dans une "card", qui se trouvera dans le "main"
4. Quelle partie du JSON contient la liste des plats ?
  Dans le tableau "dishes"
5. Pour chaque plat :
   - quels éléments HTML dois-je créer ?
    Dans JS: div card, h3, paragraphe, img
   - dans quel ordre ?
      Dans un ul
6. Comment afficher la liste des ingrédients ?
  data.dishes.ingredients
  
7. À quel moment les éléments sont ajoutés à la page ?
  Quand j'associe un appendchild avec le container

Essaye d’écrire ces réponses **dans l’ordre où le navigateur va les exécuter**.

---

## 🧪 Questions de vérification (fin d’exercice)

Utilise ces questions pour vérifier que ton raisonnement est correct :

- Suis-je capable d’expliquer avec mes mots ce que fait `fetch` ?
- À quoi sert `response.json()` ?
- Pourquoi ai-je besoin d’une boucle pour afficher les plats ?
- Quelle est la différence entre :
  - créer un élément HTML
  - lui donner du contenu
  - l’ajouter au DOM ?
- Est-ce que mon code fonctionnerait toujours si on ajoutait 10 plats de plus dans le JSON ?
- Est-ce que mon code est lisible et compréhensible par quelqu’un d’autre ?

Si tu peux répondre clairement à ces questions, tu es sur la bonne voie.

---

## 🌱 Pour aller plus loin (bonus)

Une fois la version simple terminée, tu pourras réfléchir à :

- afficher les plats par région
- afficher des informations supplémentaires (régime alimentaire, difficulté)
- ajouter une interaction (bouton, clic)
- filtrer les plats affichés

👉 Ces bonus ne sont **pas obligatoires** et doivent être faits **après** une version fonctionnelle.

---

## 🧭 Rappel important

> Un bon développeur commence par réfléchir avant d’écrire du code.

Prends le temps de comprendre.  
Un code simple est souvent le meilleur code.
