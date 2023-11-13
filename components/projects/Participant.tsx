export interface Participant {
  name: string;
  skill: string;
}

export interface Project {
  name: string;
  description: string;
  collaborators: Participant[];
}
