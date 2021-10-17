
export class MenuItem {
    title: string;
    subItems: SubmenuItem [];

    constructor(title: string, subItems: SubmenuItem[]) {
        this.title = title;
        this.subItems = subItems;
    }
}

export class SubmenuItem {
    title: string;
    information: InformationSubmenu [];

    constructor (title: string, information: any) {
        this.title = title;
        this.information = information;
    }
}

export class InformationSubmenu {
    titleString: string;
    description: string;

    constructor (titleString: string, description: string){
        this.titleString = titleString;
        this.description = description;
    }
}

export const bodyItem: MenuItem[] = [
    {
        title: 'Services', subItems: [{
            title: 'Облачные вычисления', information: [{
                titleString: 'Cloud consulting',
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }, {
                titleString: 'Cloud infrastructure analytics',
                description: 'Health-specific solutions to enhance the patient experience.'
            }, {
                titleString: 'Hybrid Cloud',
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                titleString: 'Hybrid Cloud',
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                titleString: 'Multicloud',
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }]
        },
            {
                title: 'Выделенные серверы',
                information:
                    [{
                        titleString: 'Это выделенные серверы',
                        description: 'Это информация о выделенных серверах'
                    }]
            },
            {
                title: 'Платформенные сервисы', information: [{
                    titleString: 'Это Платформенные сервисы',
                    description: 'Это информация о Платформенные сервисы'
                }]
            },
            {
                title: 'Информационная безопасность', information: [{
                    titleString: 'Это Информационная безопасность',
                    description: 'Это информация о Информационная безопасность'
                }]
            }]
    },
    {
        title: 'Managed IT', subItems: [{
            title: 'Это Managed IT', information: []
        }]
    },
    {
        title: 'Telecom Solutions', subItems: [{
            title: 'Это Telecom Solutions', information: []
        }]
    },
    {
        title: 'About Us', subItems: [{
            title: 'Это About Us', information: []
        }]
    }];

export const footerItem: MenuItem[] = [{
    title: 'Контакты', subItems: [{
        title: 'Это Контакты', information: []
    }]
},
    {
        title: 'Поиск', subItems: [{
            title: 'Это Поиск', information: []
        }]
    }];