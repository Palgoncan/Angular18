import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  edad = signal(5);
  precio = computed(()=>{ //DECLARATIVA
    if(this.edad()<18){
      return 5;
    }else if(this.edad()<65){
      return 10;
    }else {
      return 0;
    }
  });

  ngOnInit(){
    setTimeout(()=>{
      this.edad.set(18);
    },2000)
    setTimeout(()=>{
      this.edad.set(80);
    },8000)
  }
}
