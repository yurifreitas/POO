class Appointment {
    constructor(title, date) {
      this.title = title;
      this.date = new Date(date);
    }
  
    getFormattedDate() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      };
  
      const dateFormatter = new Intl.DateTimeFormat('en-US', options);
      return dateFormatter.format(this.date);
    }
  
    isToday() {
      const today = new Date();
      return (
        this.date.getDate() === today.getDate() &&
        this.date.getMonth() === today.getMonth() &&
        this.date.getFullYear() === today.getFullYear()
      );
    }
  
    isPast() {
      const now = new Date();
      return this.date < now;
    }
  }
  
  // Exemplo de uso
  const appointment = new Appointment('Reunião de equipe', '2023-12-31T14:00:00');
  
  console.log(`Título: ${appointment.title}`);
  console.log(`Data: ${appointment.getFormattedDate()}`);
  console.log(`É hoje? ${appointment.isToday() ? 'Sim' : 'Não'}`);
  console.log(`É passado? ${appointment.isPast() ? 'Sim' : 'Não'}`);
  