// Семинар: Методы и работа с контентом.
// Задание VUE.
// Вы разрабатываете приложение для отображения и
// сортировки списка товаров. У вас есть массив объектов
// products, где каждый объект представляет товар с его
// названием и ценой. Вам необходимо отобразить список
// товаров и предоставить пользователю возможность
// сортировать товары по цене (по возрастанию и по
// убыванию).
const Task = {
    data() {
        return {
            products: [
                {
                    name: 'product1',
                    price: 10
                },
                {
                    name: 'product2',
                    price: 5
                },
                {
                    name: 'product3',
                    price: 91
                },
                {
                    name: 'product4',
                    price: 9
                },
                {
                    name: 'product5',
                    price: 8
                }
            ]

        }
    },
    methods: {
        sortInAscendingOrder() {
            const result = this.products.sort((a, b) =>
                a.price - b.price);
            return result;
        },
        sortInDescendingOrder() {
            const result = this.products.sort((a, b) =>
                b.price - a.price);
            return result;
        }


    }
}

Vue.createApp(Task).mount('#task');