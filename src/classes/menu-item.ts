
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
            title: 'Cloud computing', type: ItemType.SubmenuItem, subMenuItems: [{
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
                title: 'Dedicated Servers',
                type: ItemType.SubmenuItem,
                subMenuItems:
                    [{
                        title: 'This is Dedicated Servers',
                        type: ItemType.SubmenuItemContent,
                        description: 'This is information about dedicated servers'
                    }]
            },
            {
                title: 'Platform services',
                type: ItemType.SubmenuItem,
                subMenuItems: [{
                    title: 'This is Platform services',
                    type: ItemType.SubmenuItemContent,
                    description: 'Это информация о Платформенные сервисы'
                }]
            },
            {
                title: 'Information Security',
                type: ItemType.SubmenuItem,
                subMenuItems: [{
                    title: 'This is Information Security',
                    type: ItemType.SubmenuItemContent,
                    description: 'This is information about Information Security'
                }]
            }]
    },
    {
        title: 'Managed IT',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'This is Managed IT',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    },
    {
        title: 'Telecom Solutions',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'This is Telecom Solutions',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    },
    {
        title: 'About Us',
        type: ItemType.MenuItem,
        subMenuItems: [{
            title: 'This is About Us',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    }];

export const footerItem: MenuItem[] = [{
    title: 'Contacts',
    type: ItemType.SearchAndContacts,
    subMenuItems: [{
        title: 'This is contacts',
        type: ItemType.SubmenuItem,
        subMenuItems: []
    }]
},
    {
        title: 'Search',
        type: ItemType.SearchAndContacts,
        subMenuItems: [{
            title: 'This is search',
            type: ItemType.SubmenuItem,
            subMenuItems: []
        }]
    }];
