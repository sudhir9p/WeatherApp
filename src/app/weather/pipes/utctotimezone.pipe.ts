import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'timezone' })
export class TimeZonePipe implements PipeTransform {
    transform(timestamp: number, timeZoneDiffernce: number): any {
        const dateWithTimeStamp = (new Date(timestamp * 1000));
        const utcDate = new Date(dateWithTimeStamp.getTime() + dateWithTimeStamp.getTimezoneOffset() * 60000);
        const diffHrs = timeZoneDiffernce / 3600;
        
        return `${utcDate.getDate()}-${utcDate.getMonth()+1}-${utcDate.getFullYear()}    ${utcDate.getHours()+diffHrs}:${utcDate.getMinutes()}:${utcDate.getSeconds()} `
    }
}