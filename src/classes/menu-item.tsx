
export class MenuItem {
    title: string;
    subMenuItems?: MenuItem [];
    description?: string;


    constructor(title: string, subMenuItems?: MenuItem[],
                description?: string) {
        this.title = title;
        this.subMenuItems = subMenuItems;
        this.description = description;
    }
}


export const bodyItem: MenuItem[] = [
    {
        title: 'Services', subMenuItems: [{
            title: 'Облачные вычисления', subMenuItems: [{
                title: 'Cloud consulting',
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }, {
                title: 'Cloud infrastructure analytics',
                description: 'Health-specific solutions to enhance the patient experience.'
            }, {
                title: 'Hybrid Cloud',
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                title: 'Hybrid Cloud',
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                title: 'Multicloud',
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }]
        },
            {
                title: 'Выделенные серверы',
                subMenuItems:
                    [{
                        title: 'Это выделенные серверы',
                        description: 'Это информация о выделенных серверах'
                    }]
            },
            {
                title: 'Платформенные сервисы', subMenuItems: [{
                    title: 'Это Платформенные сервисы',
                    description: 'Это информация о Платформенные сервисы'
                }]
            },
            {
                title: 'Информационная безопасность', subMenuItems: [{
                    title: 'Это Информационная безопасность',
                    description: 'Это информация о Информационная безопасность'
                }]
            }]
    },
    {
        title: 'Managed IT', subMenuItems: [{
            title: 'Это Managed IT', subMenuItems: []
        }]
    },
    {
        title: 'Telecom Solutions', subMenuItems: [{
            title: 'Это Telecom Solutions', subMenuItems: []
        }]
    },
    {
        title: 'About Us', subMenuItems: [{
            title: 'Это About Us', subMenuItems: []
        }]
    }];

export const footerItem: MenuItem[] = [{
    title: 'Контакты', subMenuItems: [{
        title: 'Это Контакты', subMenuItems: []
    }]
},
    {
        title: 'Поиск', subMenuItems: [{
            title: 'Это Поиск', subMenuItems: []
        }]
    }];
