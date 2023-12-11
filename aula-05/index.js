class Clientes{

}

class Agendamento{
        constructor(data){
            this.data = new Date(data) ;
        }
        getDataFormatada() {
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
        
            const dateFormatter = new Intl.DateTimeFormat('pt-BR', options);
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



const agendamento = new Agendamento('2023-12-06')

console.log(agendamento.getDataFormatada())