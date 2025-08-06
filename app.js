// Application Data
const appData = {
  "informacion_general": {
    "destino": "Alcalá del Júcar y alrededores",
    "fechas": "23-29 agosto 2025",
    "viajeros": {
      "personas": ["Sergio", "Sara"],
      "mascotas": ["Tapón (Yorkshire)", "Lola (Yorkshire)", "Greta (gata pequeña)"]
    },
    "radio_exploracion": "35 km",
    "clima_agosto": {
      "temperatura_max": "33°C",
      "temperatura_min": "18°C",
      "probabilidad_lluvia": "6%",
      "horas_luz": "13.7 horas"
    }
  },
  "alojamientos": [
    {
      "nombre": "Casa Rural Cueva con Jacuzzi Paraíso del Júcar",
      "tipo": "Casa Rural Cueva",
      "rating": 4.7,
      "precio_aprox": "90-120€/noche",
      "pet_friendly": true,
      "caracteristicas": ["Jacuzzi privado", "Integrada en roca", "Temperatura constante 18°C"],
      "contacto": "+34 649 52 91 95",
      "web": "http://www.casasruralesalcaladeljucar.eu"
    },
    {
      "nombre": "Hotel Spa Eliá",
      "tipo": "Hotel 4* con Spa",
      "rating": 4.7,
      "precio_aprox": "120-150€/noche",
      "pet_friendly": true,
      "caracteristicas": ["Spa completo", "2 piscinas", "Restaurante", "Paddle"],
      "contacto": "+34 967 11 01 90",
      "web": "http://www.hotelspaelia.com"
    },
    {
      "nombre": "Casa Cueva El Portón",
      "tipo": "Casa Rural Cueva",
      "rating": 4.9,
      "precio_aprox": "80-110€/noche",
      "pet_friendly": true,
      "caracteristicas": ["Cueva histórica", "LGBTQ+ friendly", "Ubicación céntrica"],
      "contacto": "Via Booking",
      "web": "https://www.booking.com"
    },
    {
      "nombre": "Finca Los Olivos",
      "tipo": "Resort Rural",
      "rating": 4.7,
      "precio_aprox": "100-140€/noche",
      "pet_friendly": true,
      "caracteristicas": ["2 piscinas", "Spa", "Bar tapas", "5 suites lujo"],
      "contacto": "+34 967 11 01 90",
      "web": "http://www.fincalosolivos.com"
    },
    {
      "nombre": "Casas Rurales Los Olivos",
      "tipo": "Casas Rurales",
      "rating": 4.5,
      "precio_aprox": "70-100€/noche",
      "pet_friendly": true,
      "caracteristicas": ["Piscina", "Jardín", "Aire acondicionado"],
      "contacto": "Via Booking",
      "web": "https://www.booking.com"
    },
    {
      "nombre": "Apartamentos Rurales Los Robles con Jacuzzi",
      "tipo": "Apartamentos",
      "rating": 4.7,
      "precio_aprox": "85-115€/noche",
      "pet_friendly": true,
      "caracteristicas": ["Jacuzzi privado", "Amplios espacios", "Cocina completa"],
      "contacto": "+34 625 66 39 92",
      "web": "https://apartamentoslosrobles.com"
    }
  ],
  "restaurantes": [
    {
      "nombre": "Restaurante Los Robles",
      "precio_medio": "20€/persona",
      "tipo_cocina": "Manchega tradicional",
      "pet_friendly": true,
      "caracteristicas": ["Único que permite mascotas DENTRO", "Menú diario 17€", "Carnes a la brasa"],
      "direccion": "Av. los Robles, 7",
      "contacto": "+34 621 24 14 92",
      "especialidades": ["Gazpacho manchego", "Migas", "Atascaburras", "Carne a la brasa"],
      "permite_mascotas_dentro": true
    },
    {
      "nombre": "Restaurante Eliá",
      "precio_medio": "50€/persona",
      "tipo_cocina": "Manchega de autor",
      "pet_friendly": true,
      "caracteristicas": ["2 terrazas", "Vista al desfiladero", "Alta cocina"],
      "direccion": "C/ Berrocal, 20",
      "contacto": "+34 678 68 41 07",
      "especialidades": ["Platos de autor", "Cocina sofisticada", "Vinos DO Manchuela"],
      "permite_mascotas_dentro": false
    },
    {
      "nombre": "Fogones El Chato",
      "precio_medio": "30€/persona",
      "tipo_cocina": "Especialidad en carnes",
      "pet_friendly": true,
      "caracteristicas": ["Terraza familiar", "Carne de caza", "Ambiente acogedor"],
      "direccion": "C/ Malvas, 18",
      "contacto": "+34 622 03 56 96",
      "especialidades": ["Croquetas rabo de toro", "Carnes de caza", "Tarta de queso casera"],
      "permite_mascotas_dentro": false
    },
    {
      "nombre": "Casa El Moli",
      "precio_medio": "25€/persona",
      "tipo_cocina": "Manchega tradicional",
      "pet_friendly": true,
      "caracteristicas": ["Antiguo molino", "Menú diario 19€", "Terraza amplia"],
      "direccion": "Av. los Robles, 5",
      "contacto": "+34 967 46 XX XX",
      "especialidades": ["Atascaburras", "Ajo mataero", "Gazpacho manchego"],
      "permite_mascotas_dentro": false
    },
    {
      "nombre": "El Mirador (Las Eras)",
      "precio_medio": "30€/persona",
      "tipo_cocina": "De autor",
      "pet_friendly": true,
      "caracteristicas": ["Vistas panorámicas", "Menú 25€", "Ideal con niños"],
      "direccion": "C/ Morrón, s/n, Las Eras",
      "contacto": "+34 637 76 71 60",
      "especialidades": ["Ensalada de perdiz", "Solomillo al foie", "Postres artesanales"],
      "permite_mascotas_dentro": false
    }
  ],
  "actividades_con_mascotas": [
    {
      "nombre": "Piraguas aguas tranquilas",
      "tipo": "Acuática",
      "duracion": "2-3 horas",
      "precio": "20-25€/persona",
      "empresa": "Avenjúcar Multiaventura",
      "pet_friendly": true,
      "requisitos_mascotas": "Chalecos especiales para perros",
      "descripcion": "Paseo en piragua por río Júcar con vistas al castillo",
      "contacto": "+34 639 30 57 31"
    },
    {
      "nombre": "Senderismo Hoz del Júcar",
      "tipo": "Naturaleza",
      "duracion": "Variable 1-4 horas",
      "precio": "Gratuito",
      "pet_friendly": true,
      "rutas": [
        {"nombre": "Sendero Batán", "distancia": "14.5 km", "duracion": "3.5h", "dificultad": "Media-baja"},
        {"nombre": "Sendero El Corciolico", "distancia": "5 km", "duracion": "1.5h", "dificultad": "Media"},
        {"nombre": "Ruta del Agua", "distancia": "N/A", "duracion": "20min", "dificultad": "Fácil"}
      ],
      "descripcion": "40km de recorrido fluvial con paisajes únicos"
    },
    {
      "nombre": "Visita Cuevas del Diablo",
      "tipo": "Cultural",
      "duracion": "1 hora",
      "precio": "3.50€/persona",
      "pet_friendly": true,
      "descripcion": "Cueva museo con objetos antiguos, bar subterráneo",
      "direccion": "C/ San Lorenzo, 7",
      "contacto": "+34 657 98 64 41"
    },
    {
      "nombre": "Cueva del Rey Garadén",
      "tipo": "Cultural-Histórico",
      "duracion": "45 min",
      "precio": "Incluido en visitas guiadas",
      "pet_friendly": true,
      "descripcion": "Cueva fortificada de 750 años con mirador excepcional",
      "requisitos_mascotas": "Con correa obligatoria"
    },
    {
      "nombre": "Visita al Castillo",
      "tipo": "Histórico",
      "duracion": "1 hora",
      "precio": "Entrada libre",
      "pet_friendly": "Con restricciones",
      "descripcion": "Castillo almohade con vistas panorámicas",
      "contacto": "+34 618 12 51 48",
      "requisitos_mascotas": "Acceso exterior solamente"
    }
  ],
  "actividades_sin_mascotas": [
    {
      "nombre": "Spa Eliá - Circuito completo",
      "tipo": "Bienestar",
      "duracion": "2-3 horas",
      "precio": "35€/persona",
      "descripcion": "Sauna, hammam, hidromasaje, jacuzzi, piscina climatizada",
      "pet_friendly": false,
      "donde_dejar_mascotas": "Cuidadores Rover/Holidog disponibles"
    },
    {
      "nombre": "Rafting río Cabriel",
      "tipo": "Aventura",
      "duracion": "Día completo",
      "precio": "45-60€/persona",
      "empresa": "Multiaventura Los Olivos",
      "pet_friendly": false,
      "descripcion": "Descenso por rápidos del río Cabriel",
      "donde_dejar_mascotas": "Servicio pet-sitting en hotel"
    }
  ],
  "actividades_multiaventura": [
    {
      "nombre": "Karting",
      "tipo": "Motor",
      "duracion": "10-60 min",
      "precio": "20-45€/persona",
      "empresa": "Karts Alcalá del Júcar",
      "pet_friendly": false,
      "caracteristicas": ["Circuito 1500m", "Karts nuevos", "Diferentes modalidades"],
      "contacto": "+34 615 95 71 67",
      "web": "http://www.kartsalcaladeljucar.es",
      "tarifas": {
        "1_tanda_10min": "20€",
        "2_tandas": "35€",
        "3_tandas": "45€",
        "carrera_equipos_60min": "35€"
      },
      "donde_dejar_mascotas": "Cuidadores Rover/Holidog disponibles",
      "edad_minima": "4 años"
    },
    {
      "nombre": "Paintball",
      "tipo": "Estrategia",
      "duracion": "90-120 min",
      "precio": "15-25€/persona",
      "empresa": "Paintballwars Albacete",
      "pet_friendly": false,
      "caracteristicas": ["3 campos temáticos", "Equipamiento incluido", "Varios escenarios"],
      "contacto": "+34 615 XXX XXX",
      "web": "https://paintballwars.es",
      "tarifas": {
        "adultos_100_bolas": "20€",
        "menores_14-17_años": "15€",
        "paintball_nocturno": "25€",
        "recarga_100_bolas": "5€"
      },
      "donde_dejar_mascotas": "Instalaciones en Albacete (7km)",
      "edad_minima": "14 años"
    },
    {
      "nombre": "Rafting Aguas Bravas",
      "tipo": "Aventura Acuática",
      "duracion": "Día completo",
      "precio": "35-40€/persona",
      "empresa": "Multiaventura Los Olivos",
      "pet_friendly": false,
      "caracteristicas": ["Río Cabriel", "Transporte incluido", "Material completo"],
      "contacto": "+34 687 44 48 02",
      "web": "https://multiaventuralosolivos.com",
      "tarifas": {
        "rafting_familiar": "40€",
        "rafting_aguas_bravas": "35€",
        "canoa_raft": "35€"
      },
      "donde_dejar_mascotas": "Servicio pet-sitting en hotel base",
      "edad_minima": "8 años"
    }
  ],
  "pueblos_cercanos": [
    {
      "nombre": "Jorquera",
      "distancia": "15 km",
      "tiempo_coche": "20 min",
      "destacados": ["Murallas almohades s.XII", "Torre de Doña Blanca", "Mirador panorámico", "Iglesia Santa María Asunción", "Ermita de Cubas (excavada en roca)"],
      "pet_friendly": true,
      "descripcion": "Villa medieval en meandro del Júcar con murallas almohades"
    },
    {
      "nombre": "Casas Ibáñez",
      "distancia": "25 km",
      "tiempo_coche": "30 min",
      "destacados": ["Iglesia San Juan Bautista (barroca s.XVII)", "Ermita Virgen de la Cabeza", "Entre ríos Júcar y Cabriel"],
      "pet_friendly": true,
      "descripcion": "Eje de La Manchuela, centro comercial comarca"
    },
    {
      "nombre": "Villa de Ves",
      "distancia": "30 km",
      "tiempo_coche": "35 min",
      "destacados": ["Castillo árabe en ruinas", "Santuario Cristo de la Vida", "Criptas con momias", "Vistas embalse Molinar"],
      "pet_friendly": true,
      "descripcion": "Despoblado histórico sobre el Júcar con excepcionales vistas"
    }
  ],
  "servicios_mascotas": [
    {
      "tipo": "Cuidadores a domicilio",
      "servicio": "Rover",
      "precio": "25-35€/día",
      "contacto": "www.rover.com",
      "descripcion": "Cuidadores verificados disponibles en Alcalá del Júcar"
    },
    {
      "tipo": "Residencia canina",
      "servicio": "Holidog",
      "precio": "18-25€/noche",
      "contacto": "www.holidog.com",
      "descripcion": "5 cuidadores disponibles en zona"
    },
    {
      "tipo": "Veterinario",
      "servicio": "Centro Veterinario Manchuela",
      "ubicacion": "Casas Ibáñez (25 km)",
      "contacto": "967 XXX XXX",
      "descripcion": "Atención veterinaria en comarca"
    },
    {
      "tipo": "Veterinario",
      "servicio": "Clínica Aralla",
      "ubicacion": "Villamalea (30 km)",
      "contacto": "+34 967 XXX XXX",
      "descripcion": "Consulta, microchips, hospitalización"
    }
  ]
};

// State management
let currentSection = 'inicio';
let favorites = new Set();
let dailyPlan = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  loadAllContent();
  initBudgetCalculator();
  initPlanner();
  initModals();
});

// Navigation
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav__tab');
  const sections = document.querySelectorAll('.section');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const sectionId = tab.dataset.section;
      showSection(sectionId);
      
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  currentSection = sectionId;
}

// Load all content
function loadAllContent() {
  loadAlojamientos();
  loadRestaurantes();
  loadActividades();
  loadMultiaventura();
  loadPueblos();
  loadServiciosMascotas();
}

// Load accommodations
function loadAlojamientos() {
  const grid = document.getElementById('alojamientos-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  appData.alojamientos.forEach(alojamiento => {
    const card = createAccommodationCard(alojamiento);
    grid.appendChild(card);
  });
  
  initAccommodationFilters();
}

function createAccommodationCard(alojamiento) {
  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => showAccommodationModal(alojamiento));
  
  const stars = '★'.repeat(Math.floor(alojamiento.rating));
  const features = alojamiento.caracteristicas.map(f => 
    `<span class="feature-tag">${f}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${alojamiento.nombre}</h3>
      <div class="card__meta">
        <div class="card__rating">
          <span>${stars}</span>
          <span>${alojamiento.rating}</span>
        </div>
        <div class="card__price">${alojamiento.precio_aprox}</div>
      </div>
      ${alojamiento.pet_friendly ? '<div class="pet-friendly-badge">🐾 Pet Friendly</div>' : ''}
    </div>
    <div class="card__body">
      <p><strong>Tipo:</strong> ${alojamiento.tipo}</p>
      <div class="card__features">${features}</div>
    </div>
  `;
  
  return card;
}

function showAccommodationModal(alojamiento) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  
  const features = alojamiento.caracteristicas.map(f => `<li>${f}</li>`).join('');
  
  modalBody.innerHTML = `
    <h2>${alojamiento.nombre}</h2>
    <div class="card__meta mb-16">
      <div class="card__rating">
        <span>${'★'.repeat(Math.floor(alojamiento.rating))}</span>
        <span>${alojamiento.rating}</span>
      </div>
      <div class="card__price">${alojamiento.precio_aprox}</div>
    </div>
    ${alojamiento.pet_friendly ? '<div class="pet-friendly-badge mb-16">🐾 Pet Friendly</div>' : ''}
    <p><strong>Tipo:</strong> ${alojamiento.tipo}</p>
    <h4>Características:</h4>
    <ul class="specialties-list">${features}</ul>
    <div class="contact-info">
      <div class="contact-item">
        <span>📞</span>
        <a href="tel:${alojamiento.contacto}" class="contact-link">${alojamiento.contacto}</a>
      </div>
      <div class="contact-item">
        <span>🌐</span>
        <a href="${alojamiento.web}" target="_blank" class="contact-link">Ver web oficial</a>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function initAccommodationFilters() {
  const precioFilter = document.getElementById('precio-filter');
  const tipoFilter = document.getElementById('tipo-filter');
  
  if (precioFilter) precioFilter.addEventListener('change', filterAccommodations);
  if (tipoFilter) tipoFilter.addEventListener('change', filterAccommodations);
}

function filterAccommodations() {
  // Simple implementation for now
  console.log('Filtering accommodations');
}

// Load restaurants
function loadRestaurantes() {
  const grid = document.getElementById('restaurantes-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  appData.restaurantes.forEach(restaurante => {
    const card = createRestaurantCard(restaurante);
    grid.appendChild(card);
  });
}

function createRestaurantCard(restaurante) {
  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => showRestaurantModal(restaurante));
  
  const petIcon = restaurante.permite_mascotas_dentro ? 
    '<span class="pet-icon inside">🐾</span>' : 
    '<span class="pet-icon terrace">🐾</span>';
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${restaurante.nombre}</h3>
      <div class="card__meta">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${petIcon}
          <span class="text-secondary">${restaurante.permite_mascotas_dentro ? 'Mascotas dentro' : 'Solo terraza'}</span>
        </div>
        <div class="card__price">${restaurante.precio_medio}</div>
      </div>
    </div>
    <div class="card__body">
      <p><strong>Cocina:</strong> ${restaurante.tipo_cocina}</p>
      <p><strong>Dirección:</strong> ${restaurante.direccion}</p>
    </div>
  `;
  
  return card;
}

function showRestaurantModal(restaurante) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  
  const especialidades = restaurante.especialidades.map(e => `<li>${e}</li>`).join('');
  const caracteristicas = restaurante.caracteristicas.map(c => `<li>${c}</li>`).join('');
  
  modalBody.innerHTML = `
    <h2>${restaurante.nombre}</h2>
    <div class="card__meta mb-16">
      <div style="display: flex; align-items: center; gap: 8px;">
        ${restaurante.permite_mascotas_dentro ? 
          '<span class="pet-icon inside">🐾</span>' : 
          '<span class="pet-icon terrace">🐾</span>'}
        <span>${restaurante.permite_mascotas_dentro ? 'Mascotas dentro' : 'Solo terraza'}</span>
      </div>
      <div class="card__price">${restaurante.precio_medio}</div>
    </div>
    <p><strong>Tipo de cocina:</strong> ${restaurante.tipo_cocina}</p>
    <p><strong>Dirección:</strong> ${restaurante.direccion}</p>
    <h4>Especialidades:</h4>
    <ul class="specialties-list">${especialidades}</ul>
    <h4>Características:</h4>
    <ul class="specialties-list">${caracteristicas}</ul>
    <div class="contact-info">
      <div class="contact-item">
        <span>📞</span>
        <a href="tel:${restaurante.contacto}" class="contact-link">${restaurante.contacto}</a>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Load activities
function loadActividades() {
  const activityTabs = document.querySelectorAll('.activity-tab');
  const conMascotasGrid = document.getElementById('actividades-con-mascotas');
  const sinMascotasGrid = document.getElementById('actividades-sin-mascotas');
  
  if (conMascotasGrid) {
    conMascotasGrid.innerHTML = '';
    appData.actividades_con_mascotas.forEach(actividad => {
      const card = createActivityCard(actividad, true);
      conMascotasGrid.appendChild(card);
    });
  }
  
  if (sinMascotasGrid) {
    sinMascotasGrid.innerHTML = '';
    appData.actividades_sin_mascotas.forEach(actividad => {
      const card = createActivityCard(actividad, false);
      sinMascotasGrid.appendChild(card);
    });
  }
  
  // Initialize activity tabs
  activityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.dataset.tab;
      
      activityTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tabType === 'con-mascotas') {
        if (conMascotasGrid) conMascotasGrid.classList.remove('hidden');
        if (sinMascotasGrid) sinMascotasGrid.classList.add('hidden');
      } else {
        if (conMascotasGrid) conMascotasGrid.classList.add('hidden');
        if (sinMascotasGrid) sinMascotasGrid.classList.remove('hidden');
      }
    });
  });
}

function createActivityCard(actividad, conMascotas) {
  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => showActivityModal(actividad, conMascotas));
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${actividad.nombre}</h3>
      <div class="card__meta">
        <span class="text-secondary">${actividad.tipo}</span>
        <div class="card__price">${actividad.precio}</div>
      </div>
      ${conMascotas ? '<div class="pet-friendly-badge">🐾 Con Mascotas</div>' : 
        '<div class="status status--warning">🚫 Sin Mascotas</div>'}
    </div>
    <div class="card__body">
      <p><strong>Duración:</strong> ${actividad.duracion}</p>
      <p>${actividad.descripcion}</p>
      ${actividad.empresa ? `<p><strong>Empresa:</strong> ${actividad.empresa}</p>` : ''}
    </div>
  `;
  
  return card;
}

function showActivityModal(actividad, conMascotas) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  
  let modalContent = `
    <h2>${actividad.nombre}</h2>
    <div class="card__meta mb-16">
      <span class="text-secondary">${actividad.tipo}</span>
      <div class="card__price">${actividad.precio}</div>
    </div>
    ${conMascotas ? '<div class="pet-friendly-badge mb-16">🐾 Con Mascotas</div>' : 
      '<div class="status status--warning mb-16">🚫 Sin Mascotas</div>'}
    <p><strong>Duración:</strong> ${actividad.duracion}</p>
    <p>${actividad.descripcion}</p>
    ${actividad.empresa ? `<p><strong>Empresa:</strong> ${actividad.empresa}</p>` : ''}
  `;
  
  if (actividad.requisitos_mascotas) {
    modalContent += `<p><strong>Requisitos para mascotas:</strong> ${actividad.requisitos_mascotas}</p>`;
  }
  
  if (actividad.donde_dejar_mascotas) {
    modalContent += `<p><strong>¿Dónde dejar las mascotas?</strong> ${actividad.donde_dejar_mascotas}</p>`;
  }
  
  if (actividad.rutas) {
    modalContent += '<h4>Rutas disponibles:</h4><ul class="specialties-list">';
    actividad.rutas.forEach(ruta => {
      modalContent += `<li><strong>${ruta.nombre}:</strong> ${ruta.distancia} - ${ruta.duracion} (${ruta.dificultad})</li>`;
    });
    modalContent += '</ul>';
  }
  
  if (actividad.contacto) {
    modalContent += `
      <div class="contact-info">
        <div class="contact-item">
          <span>📞</span>
          <a href="tel:${actividad.contacto}" class="contact-link">${actividad.contacto}</a>
        </div>
      </div>
    `;
  }
  
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
}

// Load multiadventure activities
function loadMultiaventura() {
  const grid = document.getElementById('multiaventura-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  appData.actividades_multiaventura.forEach(actividad => {
    const card = createMultiadventureCard(actividad);
    grid.appendChild(card);
  });
}

function createMultiadventureCard(actividad) {
  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => showMultiadventureModal(actividad));
  
  const features = actividad.caracteristicas.map(f => 
    `<span class="feature-tag">${f}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${actividad.nombre}</h3>
      <div class="card__meta">
        <span class="text-secondary">${actividad.tipo}</span>
        <div class="card__price">${actividad.precio}</div>
      </div>
      <div class="status status--warning">🐾 Cuidado de mascotas disponible</div>
    </div>
    <div class="card__body">
      <p><strong>Duración:</strong> ${actividad.duracion}</p>
      <p><strong>Empresa:</strong> ${actividad.empresa}</p>
      <p><strong>Edad mínima:</strong> ${actividad.edad_minima}</p>
      <div class="card__features">${features}</div>
    </div>
  `;
  
  return card;
}

function showMultiadventureModal(actividad) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  
  let tarifasContent = '';
  if (actividad.tarifas) {
    tarifasContent = '<h4>Tarifas:</h4><ul class="specialties-list">';
    Object.entries(actividad.tarifas).forEach(([key, value]) => {
      tarifasContent += `<li>${key.replace(/_/g, ' ')}: ${value}</li>`;
    });
    tarifasContent += '</ul>';
  }
  
  const features = actividad.caracteristicas.map(f => `<li>${f}</li>`).join('');
  
  modalBody.innerHTML = `
    <h2>${actividad.nombre}</h2>
    <div class="card__meta mb-16">
      <span class="text-secondary">${actividad.tipo}</span>
      <div class="card__price">${actividad.precio}</div>
    </div>
    <div class="status status--warning mb-16">🐾 Cuidado de mascotas disponible</div>
    <p><strong>Duración:</strong> ${actividad.duracion}</p>
    <p><strong>Empresa:</strong> ${actividad.empresa}</p>
    <p><strong>Edad mínima:</strong> ${actividad.edad_minima}</p>
    <p><strong>¿Dónde dejar las mascotas?</strong> ${actividad.donde_dejar_mascotas}</p>
    <h4>Características:</h4>
    <ul class="specialties-list">${features}</ul>
    ${tarifasContent}
    <div class="contact-info">
      <div class="contact-item">
        <span>📞</span>
        <a href="tel:${actividad.contacto}" class="contact-link">${actividad.contacto}</a>
      </div>
      ${actividad.web ? `
        <div class="contact-item">
          <span>🌐</span>
          <a href="${actividad.web}" target="_blank" class="contact-link">Ver web oficial</a>
        </div>
      ` : ''}
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Load nearby towns
function loadPueblos() {
  const grid = document.getElementById('pueblos-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  appData.pueblos_cercanos.forEach(pueblo => {
    const card = createTownCard(pueblo);
    grid.appendChild(card);
  });
}

function createTownCard(pueblo) {
  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => showTownModal(pueblo));
  
  const destacados = pueblo.destacados.slice(0, 3).map(d => 
    `<span class="feature-tag">${d}</span>`
  ).join('');
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${pueblo.nombre}</h3>
      <div class="card__meta">
        <span class="text-secondary">${pueblo.distancia} • ${pueblo.tiempo_coche}</span>
        ${pueblo.pet_friendly ? '<span class="pet-friendly-badge">🐾 Pet Friendly</span>' : ''}
      </div>
    </div>
    <div class="card__body">
      <p>${pueblo.descripcion}</p>
      <div class="card__features">${destacados}</div>
    </div>
  `;
  
  return card;
}

function showTownModal(pueblo) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;
  
  const destacados = pueblo.destacados.map(d => `<li>${d}</li>`).join('');
  
  modalBody.innerHTML = `
    <h2>${pueblo.nombre}</h2>
    <div class="card__meta mb-16">
      <span class="text-secondary">${pueblo.distancia} • ${pueblo.tiempo_coche}</span>
      ${pueblo.pet_friendly ? '<div class="pet-friendly-badge">🐾 Pet Friendly</div>' : ''}
    </div>
    <p>${pueblo.descripcion}</p>
    <h4>Lugares destacados:</h4>
    <ul class="specialties-list">${destacados}</ul>
  `;
  
  modal.classList.remove('hidden');
}

// Load pet services
function loadServiciosMascotas() {
  const grid = document.getElementById('mascotas-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  appData.servicios_mascotas.forEach(servicio => {
    const card = createPetServiceCard(servicio);
    grid.appendChild(card);
  });
}

function createPetServiceCard(servicio) {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="card__header">
      <h3 class="card__title">${servicio.servicio}</h3>
      <div class="card__meta">
        <span class="text-secondary">${servicio.tipo}</span>
        <div class="card__price">${servicio.precio}</div>
      </div>
    </div>
    <div class="card__body">
      <p>${servicio.descripcion}</p>
      ${servicio.ubicacion ? `<p><strong>Ubicación:</strong> ${servicio.ubicacion}</p>` : ''}
      <div class="contact-info">
        <div class="contact-item">
          <span>📞</span>
          <span class="contact-link">${servicio.contacto}</span>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Budget calculator
function initBudgetCalculator() {
  const alojamientoRange = document.getElementById('alojamiento-range');
  const comidasRange = document.getElementById('comidas-range');
  const actividadesRange = document.getElementById('actividades-range');
  
  const alojamientoValue = document.getElementById('alojamiento-value');
  const comidasValue = document.getElementById('comidas-value');
  const actividadesValue = document.getElementById('actividades-value');
  const totalBudget = document.getElementById('total-budget');
  
  if (!alojamientoRange || !comidasRange || !actividadesRange) return;
  
  function updateBudget() {
    const alojamiento = parseInt(alojamientoRange.value);
    const comidas = parseInt(comidasRange.value);
    const actividades = parseInt(actividadesRange.value);
    const total = alojamiento + comidas + actividades;
    
    if (alojamientoValue) alojamientoValue.textContent = alojamiento + '€';
    if (comidasValue) comidasValue.textContent = comidas + '€';
    if (actividadesValue) actividadesValue.textContent = actividades + '€';
    if (totalBudget) totalBudget.textContent = total + '€';
  }
  
  alojamientoRange.addEventListener('input', updateBudget);
  comidasRange.addEventListener('input', updateBudget);
  actividadesRange.addEventListener('input', updateBudget);
}

// Daily planner
function initPlanner() {
  const addActivityBtns = document.querySelectorAll('.add-activity-btn');
  
  addActivityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.dataset.day;
      showActivitySelector(day);
    });
  });
}

function showActivitySelector(day) {
  const activityModal = document.getElementById('activity-modal');
  const activitySelector = document.getElementById('activity-selector');
  if (!activityModal || !activitySelector) return;
  
  // Populate activity selector with all activities
  let options = '';
  
  // Add accommodations
  appData.alojamientos.forEach(item => {
    options += `
      <div class="activity-option" data-type="alojamiento" data-name="${item.nombre}">
        <h4>🏨 ${item.nombre}</h4>
        <p>Alojamiento - ${item.precio_aprox}</p>
      </div>
    `;
  });
  
  // Add restaurants
  appData.restaurantes.forEach(item => {
    options += `
      <div class="activity-option" data-type="restaurante" data-name="${item.nombre}">
        <h4>🍽️ ${item.nombre}</h4>
        <p>Restaurante - ${item.precio_medio}</p>
      </div>
    `;
  });
  
  // Add activities with pets
  appData.actividades_con_mascotas.forEach(item => {
    options += `
      <div class="activity-option" data-type="actividad" data-name="${item.nombre}">
        <h4>🐾 ${item.nombre}</h4>
        <p>Actividad con mascotas - ${item.precio}</p>
      </div>
    `;
  });
  
  // Add multiadventure
  appData.actividades_multiaventura.forEach(item => {
    options += `
      <div class="activity-option" data-type="multiaventura" data-name="${item.nombre}">
        <h4>⚡ ${item.nombre}</h4>
        <p>Multiaventura - ${item.precio}</p>
      </div>
    `;
  });
  
  activitySelector.innerHTML = options;
  
  // Add click events to options
  const options_elements = activitySelector.querySelectorAll('.activity-option');
  options_elements.forEach(option => {
    option.addEventListener('click', () => {
      const activityName = option.dataset.name;
      addActivityToDay(day, activityName);
      activityModal.classList.add('hidden');
    });
  });
  
  activityModal.classList.remove('hidden');
}

function addActivityToDay(day, activityName) {
  const dayActivities = document.querySelector(`[data-day="${day}"]`);
  if (!dayActivities) return;
  
  const activityItem = document.createElement('div');
  activityItem.className = 'activity-item';
  activityItem.innerHTML = `
    <span>${activityName}</span>
    <button class="remove-activity" data-activity="${activityName}">×</button>
  `;
  
  dayActivities.appendChild(activityItem);
  
  // Add remove functionality
  const removeBtn = activityItem.querySelector('.remove-activity');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    activityItem.remove();
  });
}

// Modals
function initModals() {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const activityModal = document.getElementById('activity-modal');
  const activityModalClose = document.getElementById('activity-modal-close');
  
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (modal) modal.classList.add('hidden');
    });
  }
  
  if (activityModalClose) {
    activityModalClose.addEventListener('click', () => {
      if (activityModal) activityModal.classList.add('hidden');
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
  
  if (activityModal) {
    activityModal.addEventListener('click', (e) => {
      if (e.target === activityModal) {
        activityModal.classList.add('hidden');
      }
    });
  }
}