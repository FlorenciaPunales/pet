const API = 'https://apipetshop.herokuapp.com/api/articulos'


Vue.createApp({
    data() {
        return {
            productos: [],
            medicamentos: [],
            juguetes: [],
            carrito: [],
            modal: [],
            carritoStock: 0 , 

            api: 'https://apipetshop.herokuapp.com/api/articulos',
        }
    },

    created() {
        fetch(this.api)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.productos = data.response;
                this.productos.forEach(producto => {
                    if (producto.tipo == 'Medicamento') {
                        this.medicamentos.push(producto)
                    }
                    else if (producto.tipo == 'Juguete') {
                        this.juguetes.push(producto)
                    }
                })
            });
            if(localStorage.getItem('carrito')){
                this.carrito = JSON.parse(localStorage.getItem('carrito'))
            }


    },

    methods: {
        agregarCompra: function (producto) {
            if (this.carrito.indexOf(producto) == -1) {
                this.carrito.push(producto)
                localStorage.setItem('carrito',JSON.stringify(this.carrito) )
            }
            // else if (this.carrito.indexOf(producto) = )
        },

        openNav: function () {
            document.getElementById("mySidebar").style.width = "28rem";
        },

        closeNav: function () {
            document.getElementById("mySidebar").style.width = "0";
        },

        agregarModal: function (producto) {
            this.modal.splice(0, 1, producto)
        },

        quitarCard: function(carrito) {
            this.carrito = this.carrito.filter(cr => cr.nombre != carrito.nombre)
            localStorage.setItem('carrito',JSON.stringify(this.carrito))
        },

    },

    computed: {

    },
})

    .mount("#app")


// Boton Carrito //