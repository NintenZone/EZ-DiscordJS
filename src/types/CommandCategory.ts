/**
 * @name CommandCategory
 * @field name: The short name of your category.
 * @field description: The short description of your category.
 * @field helpDisplay: Boolean that sets whether the category should be displayed in the help menu.
 */

export class CommandCategory {
    name: string = '';
    description: string = '';
    helpDisplay: boolean = true;

    constructor (name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}