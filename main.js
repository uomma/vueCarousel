'use strict'


const { createApp } = Vue;

createApp({
    data() {
        return {
            shownGame: 0,
            timeOutTime: 3,
            curentInterval: null,
            games: [{
                img: 'img/gt5.jpg',
                title: 'gta V',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
            }, {
                img: 'img/fortnite.jpg',
                title: 'fortnite',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
            }, {
                img: 'img/halo4.png',
                title: 'halo4',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
            }, {
                img: 'img/ufc4.jpg',
                title: 'ufc4',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
            }, {
                img: 'img/f1.png',
                title: 'f1',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
            }]
        }

    }, methods: {
        isActive(i) {
            if (i === 0) {
                return 'active'
            }
        },

        prevGame() {
            this.shownGame--;
            if (this.shownGame < 0) {
                this.shownGame = this.games.length - 1;
            };
        },

        nextGame() {
            this.shownGame++;
            if (this.shownGame > this.games.length - 1) {
                this.shownGame = 0;
            };
        },

        switchImg(index, event) {
            this.shownGame = index
        },

        stopSlide() {
            clearInterval(this.curentInterval),
                console.log('stop')
        },

        startSlide() {
            this.curentInterval = setInterval(() => {
                this.nextGame()
            }, this.timeOutTime * 1000);
            console.log('start')

        },


    },
    mounted() {

        this.startSlide();
    },

}).mount('#app');
