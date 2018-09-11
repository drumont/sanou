//import signin from './components/signin.component.js'
Vue.prototype.$http = axios

const app = new Vue({
    el: '#app',
    data: {
        currentPage : 'magasin',
        genderList : [],
        name : '',
        categorielist : [],
        email : '',
        password : '',
        /*categorielist: [{
                name: 'T-Shirt'
            }, {
                name: 'Jeans'
            }, {
                name: 'Chaussures'
            }, {
                name: 'Pull'
            }, {
                name: 'Costumes'
        }],*/
        //lMerge : [[{item : "Erick", item: "Richard"}], [{item : "Erick", item: "Richard"}]]
    },

    created() {
        // Ici, l'utilisation d'une fonction flêchée () => {} plutôt que function () {} est primordial !
        // sans fonction fléchée, this.myList = ... ne fonctionnera pas comme prévu
        this.$http.get('/listCategorie')
            .then(listCategorie => {
                console.log('affichage de ma liste', listCategorie)
                this.categorielist = listCategorie.data
            })
            .catch(err => {
                console.log('error', err)
            })

        this.$http.get('/listGender')
            .then(listGender => {
                console.log('affichage de ma liste', listGender)
                this.genderList = listGender.data
            })
            .catch(err => {
                console.log('error', err)
            })

        /*
        this.$http.get('/listAuth')
            .then(listAuth => {
                console.log('affichage de ma liste', listAuth)
                this.authList = listAuth.data
            })
            .catch(err => {
                console.log('error', err)
            })
        */

    },
    methods: {
        sendNewElement() {
            this.$http.post('/list', {
                name: this.name
            })
                .then(() => {
                    this.genderList.push({
                        name: this.name
                    })
                })
        },


        onClickButtonSignin(page) {
            console.log('onClisckButtonSignin', page)

            this.$http.post('/login', {
                email: this.email,
                password: this.password
            })

                .then(() => {
                    this.currentPage = page

                    this.authlist.push({
                        email: this.email,
                        password: this.password
                    })
                    console.log('taille de authlist', this.authlist)

                })
                .catch(err => {
                    console.log('error', err)
                    alert('Mauvais mot de passe ou email')
                })

        },

        onChangePage(page) {
            console.log('onChangePage', page)
            this.currentPage = page
        },
        onWriteEmail(email) {
            console.log('onWriteEmail', email)
            this.email = email
        },
        onWritePassword(password) {
            console.log('onWritePassword', password)
            this.password = password
        },
        onWriteMotDePasse(mdp){
            console.log('onWriteMotDePasse',mdp)
            this.mdp = mdp
        },
        onWriteMail(mail){
            console.log('onWriteMail', mail)
            this.mail = mail
        },

        onWritePrenom(prenom){
            console.log('onWritePrenom', prenom)
            this.prenom = prenom
        },


        addUsers: function () {
            this.$http.post('/listUsers', {
                prenom: this.prenom,
                mdp: this.mdp,
                mail: this.mail
            })
                .then(() => {
                    this.myList.push({
                        prenom: this.prenom,
                        mail: this.mail,
                        mdp: this.mdp
                    })
                })
        }
    }

})


