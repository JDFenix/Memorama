class Jugador1 {
  cartasCorrectas = 0
    constructor() {
      this.puntajeJugador1 = 0;
      this.puntajeJugador2 = 0;
      this.turnoJugador1 = true;
      this.cartaSeleccionada1 = null;
      this.cartaSeleccionada2 = null;
  
      this.imgArreglo = [
        '/asets/img/carta1.jpg',
        '/asets/img/carta2.jpg',
        '/asets/img/carta3.jpg',
        '/asets/img/carta4.jpg',
        '/asets/img/carta5.jpg',
      ];
  
  
    }
  
    inicializarEquiposNormal() {
      this.insertarFichas();
      this.agregarEventosClick();
    }
  
    insertarFichas() {
      let divRandom = this.obtenerDivs();
  
      let div = document.getElementById("divimg1");
      div.style.display = 'flex';
      div.style.justifyContent = 'center';
      div.style.alignItems = 'center';
  
      let contador = 0;
  
      this.imgArreglo.forEach((imagen) => {
        for (let i = 0; i < 2; i++) {
  
          let imgElement = document.createElement("img");
          imgElement.src = imagen;
          imgElement.style.width = '180px';
  
          imgElement.addEventListener('mouseenter', () => {
            imgElement.style.transform = 'scale(1.1)';
          });
  
          imgElement.addEventListener('mouseleave', () => {
            imgElement.style.transform = 'scale(1)';
          });
  
          divRandom[contador].appendChild(imgElement);
          contador++;
  
        }
      });
    }
  
  
    agregarEventosClick() {
      let imagenes = document.getElementsByTagName("img");
  
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", () => {
          this.validarSeleccion(imagenes[i]);
        });
      }
    }
  
  
    validarSeleccion(imagen) {
       // Evita seleccionar la misma carta dos veces y eso creo tu no le encuentro la logica pero si dijo eso stackooverflow es vdd xd
      if (imagen === this.cartaSeleccionada1) {
        return;
      }
    
      if (this.cartaSeleccionada1 === null) {
        this.cartaSeleccionada1 = imagen;
      } else if (this.cartaSeleccionada2 === null) {
        this.cartaSeleccionada2 = imagen;
    
        if (this.cartaSeleccionada1.src === this.cartaSeleccionada2.src) {
          this.cartaSeleccionada1.id = 'true';
          this.cartaSeleccionada2.id = 'true';
          this.aciertos();
          document.getElementById('correctas').innerHTML = "Acietos: " + this.cartasCorrectas;
        } else {
          setTimeout(() => {
  
            this.cartaSeleccionada1 = null;
            this.cartaSeleccionada2 = null;
            imagen.style.pointerEvents = 'auto';
          }, 1000);
        }
    
        setTimeout(() => {
          if (this.cartaSeleccionada1.src === this.cartaSeleccionada2.src) {
            imagen.style.pointerEvents = 'none';
          } else {
            let imagenes = document.getElementsByTagName("img");
            for (let i = 0; i < imagenes.length; i++) {
              imagenes[i].style.pointerEvents = 'auto';
            }
          }
    
          this.cartaSeleccionada1 = null;
          this.cartaSeleccionada2 = null;
        }, 500);
      }
    
      imagen.style.pointerEvents = 'none'; 
    }
  
    obtenerDivs() {
      let div1 = document.getElementById("d1");
      let div2 = document.getElementById("d2");
      let div3 = document.getElementById("d3");
      let div4 = document.getElementById("d4");
      let div5 = document.getElementById("d5");
      let div6 = document.getElementById("d6");
      let div7 = document.getElementById("d7");
      let div8 = document.getElementById("d8");
      let div9 = document.getElementById("d9");
      let div10 = document.getElementById("d10");
      let div11 = document.getElementById("d11");
      let div12 = document.getElementById("d12");
      let div13 = document.getElementById("d13");
      let div14 = document.getElementById("d14");
      let div15 = document.getElementById("d15");
      let div16 = document.getElementById("d16");
      let div17 = document.getElementById("d17");
      let div18 = document.getElementById("d18");
      let div19 = document.getElementById("d19");
      let div20 = document.getElementById("d20");
  
      let array = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10,
        // div11, div12, div13, div14, div15, div16, div17, div18, div19, div20
      ];
  
      array.sort(() => Math.random() - 0.5);
  
      return array;
    }

    aciertos()
    {
         this.cartasCorrectas = this.cartasCorrectas + 1;
        if(this.cartasCorrectas == 5){
            alert("Has ganado el juego");
            window.location.href = "Unijugador.html"
        }
    }

  }
  
  