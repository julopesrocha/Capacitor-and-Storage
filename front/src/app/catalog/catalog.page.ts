import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; 
import { ToastController } from '@ionic/angular';

/* INTEGRAÇÃO */
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  constructor(private router:Router, public searchService: SearchService, public toastController: ToastController ) { }
  public searchValue: string;
  public auth: boolean = true; //variável que indica se o usuário está ou não logado

  public republicsArray: object[] = []

  ngOnInit() {
    if(localStorage.getItem('token') == 'null'){
      this.auth = false;
    }
    else this.auth = true;
    this.searchService.getRepublics().subscribe( (res) => {
      console.log(res);
      res.republics.forEach(element => {
        this.republicsArray.push(element);
      });
    });
  }
}