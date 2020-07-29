import { Referee } from './referee';
import { Team } from './team';

export class Match{
    id:number;
    scorea:string;
    scoreb:string;
    penoa:string;
    penob:string;
    stadium:string;
    hour:string;
    date:string;
    teams :Team[];
    referees:Referee[];
}