const Counter = {
    data() {
        return {
            counter: 0
        }
    }
};

// Задачи по vue.
// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки,
// должен перевернуться и отобразиться в обратном порядке.
const Task1 = {
    data() {
        return {
            textButton: 'Перевернуть'
        }
    },
    methods: {
        turnText() {
            this.textButton = this.textButton.split('').reverse().join('');
        },
    },
};

// 2. есть список элементов. Пользователь может добавлять новые
// элементы списка с текстом “Новый элемент списка” нажав на кнопку
// "Добавить".
// 3. * При клике на элемент списка он должен быть удален. (по желанию).
const Task2_3 = {
    data() {
        return {
            listElem: [],
            addText: 'Новый элемент списка',
            buttonName: 'Добавить'
        }
    },
    methods: {
        addNewTextElem() {
            this.listElem.push(this.addText);
            console.log(this.listElem);
        },
        delElemInList(e) {
            e.target.remove();
            this.listElem.pop();
        }
    }
};


Vue.createApp(Counter).mount('#counter');
Vue.createApp(Task1).mount('#task1');
Vue.createApp(Task2_3).mount('#task2');