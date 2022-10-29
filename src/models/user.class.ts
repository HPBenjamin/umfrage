export class User {
    email: string;
    vacation: number;
    color: number;
    car: number;

     constructor(obj?: any) {
        this.email = obj ? obj.email : '';
        this.vacation = obj ? obj.vacation : '';
        this.color = obj ? obj.color : '';
        this.car = obj ? obj.car : '';

     }
}