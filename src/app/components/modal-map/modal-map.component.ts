import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.sass']
})
export class ModalMapComponent implements AfterViewInit {

  private map: L.Map = {} as L.Map;

  constructor(
    private dialogRef: MatDialogRef<ModalMapComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any
  ) {

  }

  ngAfterViewInit() {
    this.initializeMap();
    this.searchLocation(this.user);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  private initializeMap() {
    this.map = L.map('map').setView([0, 0], 2); // Configurar visualização inicial do mapa

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private searchLocation(city: string) {

    console.log(city)

    const apiKey = 'sk.eyJ1IjoiaGx0YXYiLCJhIjoiY2xqb3plMDBrMWx1NzNlcW56NHJ6MDlndCJ9.5iS_gn_5Ep2Tq7uymFzpMQ';
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const [longitude, latitude] = data.features[0].center;
        this.map.setView([latitude, longitude], 12); // Configurar visualização no mapa para a localização encontrada
        L.marker([latitude, longitude]).addTo(this.map); // Adicionar um marcador no mapa
      })
      .catch(error => {
        console.error('Erro ao buscar localização:', error);
      });
  }

  closeModal() {
    this.dialogRef.close()
  }

}
