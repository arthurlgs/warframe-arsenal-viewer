export interface Ability {
    name: string;
    description: string;
    type: string;
    imageName: string;
}

export interface Warframe {
    // Identifiers and lore
    uniqueName: string;
    name: string;
    description: string;

    // Base stats
    health: number;
    shield: number;
    armor: number;
    power: number; // energy
    sprintSpeed: number;

    // Mechanics and kit
    passiveDescription: string;
    abilities: Ability[];

    // Media
    imageName: string;
}