import { PipeTransform } from "@angular/core";

export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value:string, character:string) : string{
        return value.replace(character, ' ');
    }
}