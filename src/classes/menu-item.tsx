
export class MenuItem {
    title: string;
    subMenuItems?: MenuItem [];
    description?: string;
    type: ItemType;

    constructor(title: string, type: ItemType, subMenuItems?: MenuItem[],
                description?: string) {
        this.title = title;
        this.subMenuItems = subMenuItems;
        this.description = description;
        this.type = type
    }
}

export enum ItemType {
    MenuItem,
    SubmenuItem,
    SubmenuItemContent,
    SearchAndContacts
}

export const bodyItem: MenuItem[] = [
    {
        title: 'Services', type: ItemType.MenuItem, subMenuItems: [{
            title: 'Облачные вычисления', type: ItemType.SubmenuItem, subMenuItems: [{
                title: 'Cloud consulting',
                type: ItemType.SubmenuItemContent,
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }, {
                title: 'Cloud infrastructure analytics',
                type: ItemType.SubmenuItemContent,
                description: 'Health-specific solutions to enhance the patient experience.'
            }, {
                title: 'Hybrid Cloud',
                type: ItemType.SubmenuItemContent,
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                title: 'Hybrid Cloud',
                type: ItemType.SubmenuItemContent,
                description: 'Data storage, AI, and analytics solutions for government agencies.'
            }, {
                title: 'Multicloud',
                type: ItemType.SubmenuItemContent,
                description: 'Relational database services for MySQL, PostgreSQL, and SQL server.'
            }]
        },
            {
                title: 'Выделенные серверы',
                type: ItemType.SubmenuItem,
                subMenuItems:
                    [{
                        title: 'Это выделенные серверы',
                        type: ItemType.SubmenuItemContent,
                        description: 'Это информация о выделенных серверах'
                    }]
            },
            {
                title: 'Платформенные сервисы',
                type: ItemType.SubmenuItem,
                subMenuItems: [{
                    title: 'Это Платформенные сервисы',
                    type: ItemType.SubmenuItemContent,
                    description: 'Это информация о Платформенные сервисы'
                }]
            },
            {
                title: 'Информационная безопасность',
                type: ItemType.SubmenuItem,
                subMenuItems: [{
                    title: 'Это Информационная безопасность',
                    type: ItemType.SubmenuItemContent,
                    description: 'Это информация о Информационная безопасность'
                }]
            }]
    },
    {
        title: 'Managed IT',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'Это Managed IT',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    },
    {
        title: 'Telecom Solutions',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'Это Telecom Solutions',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    },
    {
        title: 'About Us',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'Это About Us',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    }];

export const footerItem: MenuItem[] = [{
    title: 'Контакты',
    type: ItemType.SearchAndContacts,
    subMenuItems: [{
        title: 'Это Контакты',
        type: ItemType.SubmenuItem,
        subMenuItems: []
    }]
},
    {
        title: 'Поиск',
        type: ItemType.SearchAndContacts,
        subMenuItems: [{
            title: 'Это Поиск',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    }];
