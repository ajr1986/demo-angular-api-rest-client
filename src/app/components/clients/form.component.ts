import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  private client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router, private activateRouter: ActivatedRoute) {
    this.loadClient();
  }

  ngOnInit() {
  }

  loadClient() {

    this.activateRouter.params.subscribe(
      param => {
        let id = param['id'];
        if (id) {
          this.clientService.getClient(id).subscribe(
            client => this.client = client
          )
        }
      }
    )
  }

  create() {

    this.clientService.create(this.client).subscribe(
      client => {
        this.router.navigate(['/clients']);
        swal('New client', `Client created successfuly!`, 'success');
      });
  }

  update(){

    this.clientService.update(this.client).subscribe(
      client => {
        this.router.navigate(['/clients']);
        swal('Edit client', `Client edited successfuly!`, 'success');
      }
    )
  }

}
