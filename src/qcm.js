

const exam = [
  {
    question: "Votre nom",
    answer: {
      name: "lastname",
      type: "text"
    }
  },
  {
    question: "Votre prénom",
    answer: {
      name: "firstname",
      type: "text"
    }
  },
  {
    question: "À quoi sert React ?",
    answer: {
      name: "q0",
      type: "radio",
      options: [
	{
	 value: "q0_a1",
	 text: "A administrer des bases de données"
	},
	{
	 value: "q0_a2",
	 text: "A créer des interfaces utilisateurs en Javascript"
	},
	{
	 value: "q0_a3",
	 text: "A envoyer des requêtes réseau avec Javascript"
	},
	{
	 value: "q0_a4",
	 text: "A rien"
	}
      ]
    }
  },
  {
    question: "Sur quel concept repose React ?",
    answer: {
      name: "q1",
      type: "radio",
      options: [
	{
	 value: "q1_a1",
	 text: "les modules"
	},
	{
	 value: "q1_a2",
	 text: "les services"
	},
	{
	 value: "q1_a3",
	 text: "les composants"
	},
	{
	 value: "q1_a4",
	 text: "les microservices"
	}
      ]
    }
  },
  {
    question: "Qui développe React ?",
    answer: {
      name: "q2",
      type: "radio",
      options: [
	{
	 value: "q2_a1",
	 text: "Google"
	},
	{
	 value: "q2_a2",
	 text: "Twitter"
	},
	{
	 value: "q2_a3",
	 text: "Apple"
	},
	{
	 value: "q2_a4",
	 text: "Facebook"
	}
      ]
    }
  },
  {
    question: "À quoi servent les 'props' ?",
    answer: {
      name: "q3",
      type: "radio",
      options: [
	{
	 value: "q3_a1",
	 text: "A passer des propriétés au composant"
	},
	{
	 value: "q3_a2",
	 text: "A créer un état pour le composant"
	},
	{
	 value: "q3_a3",
	 text: "A afficher le composant"
	},
	{
	 value: "q3_a4",
	 text: "A casser les pieds"
	}
      ]
    }
  },
  {
    question: "À quoi sert 'JSX' ?",
    answer: {
      name: "q4",
      type: "radio",
      options: [
	{
	 value: "q4_a1",
	 text: "A faire des appels à la base de données"
	},
	{
	 value: "q4_a2",
	 text: "A rajouter des types à Javascript"
	},
	{
	 value: "q4_a3",
	 text: "A fournir une surcouche syntaxique à Javascript pour appeler les fonctions React"
	},
	{
	 value: "q4_a4",
	 text: "C'est un autre nom pour Javascript"
	}
      ]
    }
  },
  {
    question: "Qu'est-ce qu'un 'state' ?",
    answer: {
      name: "q5",
      type: "checkbox",
      options: [
	{
	 name: "q5_a1",
	 text: "Un stockage permanent"
	},
	{
	 name: "q5_a2",
	 text: "Un stockage interne du composant"
	},
	{
	 name: "q5_a3",
	 text: "Aucun des deux"
	}
      ]
    }
  },
  {
    question: "Quels sont les avantages de React ?",
    answer: {
      name: "q6",
      type: "checkbox",
      options: [
	{
	 name: "q6_a1",
	 text: "Il permet de générer des balises HTML dynamiquement sur le navigateur"
	},
	{
	 name: "q6_a2",
	 text: "Il permet d'améliorer les performances en réduisant les échanges réseau'"
	},
	{
	 name: "q6_a3",
	 text: "Il permet de faire un site le plus léger possible"
	}
      ]
    }
  },
  {
    question: "Comment puis-je faire un affichage conditionnel ?",
    answer: {
      name: "q7",
      type: "checkbox",
      options: [
	{
	 name: "q7_a1",
	 text: "En utilisant une fonction"
	},
	{
	 name: "q7_a2",
	 text: "En passant des paramètres à la fonction 'ReactDOM.render'"
	},
	{
	 name: "q7_a3",
	 text: "En utilisant une expression ternaire"
	}
      ]
    }
  },
  {
    question: "'react-dom-router' permet de faire varier l'affichage en fonction de l'URL",
    answer: {
      name: "q8",
      type: "toggle",
    }
  },
  {
    question: "'create-react-app' permet de générer un projet React préconfiguré",
    answer: {
      name: "q9",
      type: "toggle",
    }
  }
];


export default exam;