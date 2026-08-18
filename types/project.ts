export interface LocalizedText {
    en: string;
    fr: string;
}

export interface CaseStudyDecision {
    text: LocalizedText;
}

export interface CaseStudyStack {
    frontend?: string[];
    admin?: string[];
    backend?: string[];
    infra?: string[];
}

export interface CaseStudyLinks {
    live?: string;
    github?: string;
    repoPrivate?: boolean;
    extraRepos?: { label: string; url: string }[];
}

export interface CaseStudy {
    result: LocalizedText;
    role: string;
    period: string;
    type: string;
    team: string;
    status?: LocalizedText;
    context: LocalizedText;
    hardPart: LocalizedText;
    decisions: CaseStudyDecision[];
    numbers?: LocalizedText;
    stack: CaseStudyStack;
    next?: LocalizedText;
    links: CaseStudyLinks;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    category: 'web' | 'mobile' | 'backend' | 'internal';
    year?: string;
    featured?: boolean;
    description: LocalizedText;
    tech: string[];
    image?: string; // real screenshot URL only — omit rather than fake one
    links: {
        github?: string;
        live?: string;
        download?: string;
    };
    caseStudy?: CaseStudy;
}
