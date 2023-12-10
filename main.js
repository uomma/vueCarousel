'use strict'
/* 
const games = [
    {
        img: 'img/gt5.jpg',
        title: 'gtaV',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
    }, {
        img: 'fortnite.jpg',
        title: 'fortnite',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
    }, {
        img: 'halo4.png',
        title: 'halo4',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
    }, {
        img: 'ufc4.jpg',
        title: 'ufc4',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
    }, {
        img: 'f1.png',
        title: 'f1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis velit fugiat doloribus laboriosam eos, sunt quasi ad dolor harum repellat. In, illo. Sint et ex iste dicta vitae, fugiat deleniti!'
    }
]
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            shownGame: 0,
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
        //al click su una thumbs viene visualizzata in grande la stessa immagine
        switchImg(index, event) {
            this.shownGame = index
        }

    }

}).mount('#app');
