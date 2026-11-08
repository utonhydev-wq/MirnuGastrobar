export interface RestaurantInfo {
  name: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  logoUrl: string;
  locationCity: string;
  neighborhood: string;
  whatsappNumber: string;
  whatsappLink: string;
  ifoodLink: string;
  mapsLink: string;
  mapsEmbedUrl: string;
  reviewLink: string;
  instagramUrl: string;
  facebookUrl: string;
  hours: {
    lunch: {
      days: string;
      time: string;
      badge: string;
    };
    happyHour: {
      days: string;
      time: string;
      badge: string;
    };
  };
  gallery: Array<{
    url: string;
    alt: string;
    title: string;
    description: string;
  }>;
}

export const RESTAURANT_DATA: RestaurantInfo = {
  name: "Mirnu Gastrobar",
  tagline: "Gastronomia & Momentos Especiais",
  heroTitle: "Uma experiência de sabor para todos os momentos.",
  heroSubtitle:
    "Almoço todos os dias e Happy Hour de quinta a domingo. Venha viver essa experiência no Mirnu Gastrobar!",
  logoUrl: "https://i.postimg.cc/T1NQ5y0Q/logo.jpg",
  locationCity: "Jaboatão dos Guararapes – PE",
  neighborhood: "Prazeres",
  whatsappNumber: "(81) 99271-5946",
  whatsappLink:
    "https://wa.me/5581992715946?text=Ol%C3%A1!%20Conheci%20o%20Mirnu%20Gastrobar%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.",
  ifoodLink:
    "https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/mirnu-gastrobar---marmita-prazeres/b68afd37-5316-404e-b1d5-fdf617a92e7c",
  mapsLink: "https://maps.app.goo.gl/JUJ9TRm8VVMDgE379",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.8!2d-34.925!3d-8.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e0020a4b0d6%3A0x4892f4cfec9eb4cb!2sMirnu%20Gastrobar!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
  reviewLink:
    "https://search.google.com/local/writereview?placeid=ChIJZ0GeCgDhqgcRy7Se9M_0kkg",
  instagramUrl: "https://www.instagram.com/mirnugastrobar/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61570003875359",
  hours: {
    lunch: {
      days: "Segunda a domingo",
      time: "08h às 15h",
      badge: "Todos os dias",
    },
    happyHour: {
      days: "Quinta-feira a domingo",
      time: "18h às 23h",
      badge: "Quinta a Domingo",
    },
  },
  gallery: [
    {
      url: "https://i.postimg.cc/JzVZ6cs5/mirnugastrobar-1793628003-4021519516765074416-6189682257.jpg",
      alt: "Experiência Gastronômica Mirnu Gastrobar",
      title: "Gastronomia & Sabor Autêntico",
      description: "Pratos preparados com ingredientes selecionados e tempero inconfundível.",
    },
    {
      url: "https://i.postimg.cc/zGZKtSyp/mirnugastrobar-1793628003-4021519516773492525-6189682257.jpg",
      alt: "Ambiente e Atendimento Mirnu Gastrobar",
      title: "Ambiente Acolhedor",
      description: "O espaço ideal para descontrair, celebrar e saborear bons momentos.",
    },
    {
      url: "https://i.postimg.cc/Mp2VPbn5/mirnugastrobar-1793628003-4021519517008347413-6189682257.jpg",
      alt: "Happy Hour e Petiscos Mirnu Gastrobar",
      title: "Happy Hour Vibrante",
      description: "Bebidas geladas, drinks e petiscos especiais de quinta a domingo.",
    },
  ],
};

export interface OpenStatus {
  isOpen: boolean;
  statusLabel: string;
  statusDetail: string;
  period: "lunch" | "happy_hour" | "closed";
}

/**
 * Calculates current real-time operating status based on PE (Recife UTC-3) time.
 */
export function getRestaurantCurrentStatus(): OpenStatus {
  try {
    // Determine Recife local time (UTC-3)
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    // America/Recife is UTC-3 (no daylight saving time)
    const recifeDate = new Date(utcTime - 3 * 3600000);

    const day = recifeDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const hour = recifeDate.getHours();
    const minute = recifeDate.getMinutes();
    const totalMinutes = hour * 60 + minute;

    // Almoço: 08:00 (480 min) to 15:00 (900 min) every day
    const isLunchTime = totalMinutes >= 8 * 60 && totalMinutes < 15 * 60;

    // Happy Hour: 18:00 (1080 min) to 23:00 (1380 min) Thursday (4) to Sunday (0)
    const isHappyHourDay = day === 4 || day === 5 || day === 6 || day === 0;
    const isHappyHourTime = isHappyHourDay && totalMinutes >= 18 * 60 && totalMinutes < 23 * 60;

    if (isLunchTime) {
      return {
        isOpen: true,
        statusLabel: "Aberto Agora",
        statusDetail: "Horário de Almoço até 15h",
        period: "lunch",
      };
    }

    if (isHappyHourTime) {
      return {
        isOpen: true,
        statusLabel: "Aberto Agora",
        statusDetail: "Happy Hour até 23h",
        period: "happy_hour",
      };
    }

    // Closed logic: next opening forecast
    if (totalMinutes < 8 * 60) {
      return {
        isOpen: false,
        statusLabel: "Fechado no Momento",
        statusDetail: "Abre hoje às 08h para o Almoço",
        period: "closed",
      };
    }

    if (totalMinutes >= 15 * 60 && totalMinutes < 18 * 60) {
      if (isHappyHourDay) {
        return {
          isOpen: false,
          statusLabel: "Intervalo da Tarde",
          statusDetail: "Abre hoje às 18h para o Happy Hour",
          period: "closed",
        };
      } else {
        return {
          isOpen: false,
          statusLabel: "Fechado no Momento",
          statusDetail: "Abre amanhã às 08h para o Almoço",
          period: "closed",
        };
      }
    }

    return {
      isOpen: false,
      statusLabel: "Fechado no Momento",
      statusDetail: "Abre amanhã às 08h para o Almoço",
      period: "closed",
    };
  } catch {
    return {
      isOpen: true,
      statusLabel: "Aberto para Atendimento",
      statusDetail: "Almoço Diário & Happy Hour Qui-Dom",
      period: "lunch",
    };
  }
}
