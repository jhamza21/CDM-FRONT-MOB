import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match.css'],


})
export class MatchListComponent implements OnInit {
    matchs: Array<Match>;
  who:number;

  constructor(private matchService: MatchService,private route: ActivatedRoute){
    route.params.subscribe(val => {
        this.ngOnInit();
      });

  }

  ngOnInit():void {

    this.who = +this.route.snapshot.params.who;
    if(this.who==1){
        this.matchService.GetAllMatchs().subscribe(data=>{this.matchs=data;this.matchs=this.matchs.slice(0,48);});
    }
    if(this.who==2){
        this.matchService.GetAllMatchs().subscribe(data=>{this.matchs=data;this.matchs=this.matchs.slice(48,56);});
    }
    if(this.who==3){
        this.matchService.GetAllMatchs().subscribe(data=>{this.matchs=data;this.matchs=this.matchs.slice(56,60);});
    }
    if(this.who==4){
        this.matchService.GetAllMatchs().subscribe(data=>{this.matchs=data;this.matchs=this.matchs.slice(60,62);});
    }
    if(this.who==5){
        this.matchService.GetAllMatchs().subscribe(data=>{this.matchs=data;this.matchs=this.matchs.slice(62,63);});
    }
  }

     confirm(m:Match){
if(this.who==1){
    dialogs.prompt({title: "Enter "+m.teams[0].name+" score",
    okButtonText: "Ok",
    cancelButtonText: "Cancel",
    defaultText: m.scorea,
    inputType: dialogs.inputType.decimal,
    }).then(r => {
       if(r.result){
        m.scorea=r.text;
        dialogs.prompt({title: "Enter "+m.teams[1].name+" score",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        defaultText: m.scoreb,
        inputType: dialogs.inputType.decimal,
        }).then(t => {
           if(t.result){
           m.scoreb=t.text;
           this.update_match_pool(m);
         }
        });
       }
    });

     }
     if(this.who>1){
        dialogs.prompt({title: "Enter "+m.teams[0].name+" score",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
        defaultText: m.scorea,
        inputType: dialogs.inputType.decimal,
        }).then(r => {
           if(r.result){
            m.scorea=r.text;
            dialogs.prompt({title: "Enter "+m.teams[1].name+" score",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            defaultText: m.scoreb,
            inputType: dialogs.inputType.decimal,
            }).then(t => {
               if(t.result){
               m.scoreb=t.text;
               if(m.scoreb!=m.scorea){
               this.update_match(m);
             } else if(m.scorea==m.scoreb){

                dialogs.prompt({title: "Enter "+m.teams[0].name+" penalties",
                okButtonText: "Ok",
                cancelButtonText: "Cancel",
                defaultText: m.penoa,
                inputType: dialogs.inputType.decimal,
                }).then(r => {
                   if(r.result){
                    m.penoa=r.text;
                    dialogs.prompt({title: "Enter "+m.teams[1].name+" penalties",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel",
                    defaultText: m.penob,
                    inputType: dialogs.inputType.decimal,
                    }).then(t => {
                       if(t.result){
                       m.penob=t.text;
                       if(m.penoa==m.penob)
                           alert("Penalties can't be equal");
                           else
                           this.update_match_peno(m);
                        }})}
                    });
                    }
                    }
                    });
                    }
                    });
                    }
                }





public update_match_pool(m:Match){

    this.matchService.UpdateMatchPool(m.id, m).subscribe(data => { if(!data)alert(data);if(data)alert("Match updated");},
    error => {alert("Match not updated");});
}
public update_match(m:Match){

    this.matchService.UpdateMatch(m.id, m).subscribe(data => { if(!data)alert(data);if(data)alert("Match updated");},
    error => {alert("Match not updated");});
}
public update_match_peno(m:Match){
    this.matchService.Updatepeno(m.id, m).subscribe(data => { if(!data)alert(data);if(data)alert("Match updated");},
    error => {alert("Match not updated");});
}
  isUpdated(m:Match){
   if(m.scorea==null||m.scoreb==null) return false;
   else return true;
  }


  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
