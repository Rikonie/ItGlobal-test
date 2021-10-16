export class MenuItem {
    title: string;
    subItems: string [];

    constructor (title: string, subItems: string[]) {
        this.title = title;
        this.subItems= subItems;
    }
}

export const bodyItem: MenuItem[] = [
    {title: 'Services', subItems: ['Облачные вычисления',
            'Выделенные серверы', 'Платформенные сервисы',
            'Информационная безопасность']
    },
    {title: 'Managed IT', subItems: ['Добрый день, Вы попали на страницу Managed IT']},
    {title: 'Telecom Solutions', subItems: ['Добрый день, Вы попали на страницу Telecom Solutions']},
    {title: 'About Us', subItems: ['Добрый день, Вы попали на страницуAbout Us']}];

export const footerItem: MenuItem[] = [{title: 'Контакты', subItems: ['Добрый день, Вы попали на страницу Контакты']},
    {title: 'Поиск', subItems: ['Добрый день, Вы попали на страницу Поиск']}];