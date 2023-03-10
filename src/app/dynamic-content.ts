import { EventEmitter } from "@angular/core";

export interface DynamicContent {
    data:unknown;
    config:unknown;
    clicked:EventEmitter<void>
}
