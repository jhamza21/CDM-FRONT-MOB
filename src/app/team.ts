import { Match } from './match';
import { Pool } from './pool';

export class Team{
    id:number;
    nbrplayer:number;
    nbrstaff:number;
    gameplayed:number;
    name:string;
    point:number;
    match: Match;
    pool: Pool;
    goal_scored:number;
    goal_conceded:number;
    
    
}

