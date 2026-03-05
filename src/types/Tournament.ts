// Tournament.ts

// Interface for a Tournament
export interface Tournament {
    id: string;
    name: string;
    date: Date;
    location: string;
    teams: Team[];
}

// Interface for a Team
export interface Team {
    id: string;
    name: string;
    wins: number;
    losses: number;
}