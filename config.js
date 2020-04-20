var app = new Vue({
  el: '#page',
  data: {
    name: 'CV de JIALE LI',
    Nom: 'LI Jiale',
    Numero: '0766535772',
    Mail: 'ljl19971006@gmail.com',
    Page: 'www.baidu.com',
    Adresse: '33 rue mieg.90000 Belfort',
    Poste: 'Etudiant',
    Imagephoto: 'images/user.png',
    Contact: [
      {
        Type: 'Facebook',
        Adresse: 'https://weibo.com'
      },
      {
        Type: 'qq',
        Adresse: '234'
      },
      {
        Type: 'git',
        Adresse: '23423'
      }
    ],
    Title: 'Bonjour!',
    content: 'Je suis etudiant de UTBM，je suis en train de chercher un stage.',
    
    Experience: [
      {
        Nom: "Projet national d'innovation et d'entrepreneuriat des étudiants universitaires",
        Nomlieu: 'Universite de Shanghai',
        Temps: '2019-2020',
        Introduction: "Etude des dilemmes et des défis rencontrés par les étudiants chinois dans les classes interculturelles."
      },
      {
        Nom: "Stage d'ete",
        Nomlieu: 'Golden finance,Shanghai',
        Temps: 'Aout 2018 ',
        Introduction: 'Stage sur departemant de marketing.'
      },
      {
        Nom: "Atelier d’électronique de l’Université de Shanghai-Stage d’électronique de 2 semaines",
        Nomlieu: 'Universite de Shanghai',
        Temps: 'Juillet 2018',
        Introduction: "Apprentissage de la soudure à l’étain et contrôle de la fréquence des ondes radiophoniques."
      },
    ],
    Formation: [
      {
        Periode: 'Ingénieur',
        Nomecole: 'Université de technologie de Belfort Montbéliard (UTBM)',
        Temps: 'Depuis 2019',
        Introduction: "Spécialité d'informatique"
      },
      {
        Periode: 'Licence',
        Nomecole: "Université de technologie sino-européenne de l'université de Shanghai (UTSEUS)",
        Temps: '2016-2019',
        Introduction: "Spécialité d'informatique"
      },
    ],
   
    Capacite: [
      {
        Nom: "Gestion d'equipe",
        Introduction: 'Experience de president de BDE.'
      },
      {
        Nom: "Communication et negociation",
        Introduction: 'Representant de reunion de Campus.'
      },
      {
        Nom: "Esprit d'equipe",
        Introduction: "Bien jouer dans les travail d'equipe."
      },
      {
        Nom: "Anti stresse",
        Introduction: 'Voir la vie en rose.'
      },
      {
        Nom: "International",
        Introduction: 'Parler trois langues: Chinoise,Francais,Anglais.'
      },
      {
        Nom: "Travail bien",
        Introduction: 'Fort en apprentissage.'
      },
    ],
    Skills: [
      {
        Nom: 'Web',
        Pourcentage: 80,
      },
      {
        Nom: 'Java',
        Pourcentage: 80,
      },
      {
        Nom: 'SQL',
        Pourcentage: 85,
      },
      {
        Nom: 'C++',
        Pourcentage: 80,
      },
      {
        Nom: 'Algorithme',
        Pourcentage: 80,
      },
      {
        Nom: 'Mathematique',
        Pourcentage: 80,
      },
      {
        Nom: 'PS&PR',
        Pourcentage: 75,
      },
      {
        Nom: 'Office',
        Pourcentage: 85,
      }
    ],
    /** 我的作品*/
    Work: [
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      },
      {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }, {
        名称: '篮球',
        地址: 'www.baidu.com',
        图片: 'images/cxk.jpg',
        简介: '新作品'
      }
    ]
  },
  mounted () {
    document.title = this.name
  }
})