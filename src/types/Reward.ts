// Reward.ts

// Interface representing a reward
export interface Reward {
    id: number;
    name: string;
    description: string;
    value: number;
    type: string; // e.g., "gift card", "discount", etc.
}

// Interface representing a gift card
export interface GiftCard extends Reward {
    cardNumber: string;
    expirationDate: string; // YYYY-MM-DD format
    brand: string; // e.g., "Amazon", "Starbucks"
}