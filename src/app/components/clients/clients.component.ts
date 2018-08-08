import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from '../../services/client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {

    clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

  ngOnInit() {
  }

  delete(id) {

    swal({
      title: 'Delete?',
      text: 'Are you sure?',
      type: 'warning',
      showCancelButton: true
    }).then(result => {

      if (result.value) {

        this.clientService.delete(id).subscribe(
          response => {
            this.clients = this.clients.filter(cli => cli.id != id);
            swal('Delete client', `Client deleted successfuly!`, 'success');
          }
        )
      }
    });
  }
}
