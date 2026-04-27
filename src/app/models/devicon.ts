export interface Devicon {
    name: string;
    altnames: string[];
    tags: string[];
    versions: {
        svg: string[];
        font: string[];
    };
    color: string;
    aliases: DeviconAlias[];
}

export interface DeviconAlias {
  base: string;
  alias: string;
}