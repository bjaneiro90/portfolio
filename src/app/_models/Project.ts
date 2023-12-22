import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tag1: string[];
    tag2: string[];
    tag3: string[];
    
}