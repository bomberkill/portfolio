export interface LocalizedText {
    en: string;
    fr: string;

}

export interface Project {
    id: number;
    title: string;
    category: 'web' | 'mobile' | 'backend';
    description: LocalizedText;
    goal?: LocalizedText;
    role?: LocalizedText;
    team?: string;
    tech: string[];
    image: string; // CSS Gradient or URL
    links: {
        github?: string;
        live?: string;
        download?: string;
    };
}
