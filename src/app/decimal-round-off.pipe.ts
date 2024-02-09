import { Pipe, PipeTransform } from '@angular/core';
import { Constant } from './constant';
import { formatNumber } from '@angular/common';

export interface RoundingFormat {
  priceRounding:    number;
  quantityRounding: number;
  fxRounding:       number;
}

export interface TenantConfig {
  roundingFormat:   RoundingFormat;
}

@Pipe({
  name: 'decimalRoundOff'
})
export class DecimalRoundOffPipe implements PipeTransform {

  defaultConfig = '{roundingFormat:{priceRounding: 2, quantityRounding: 3}}';

  transform(value: any, ...args: any[]): Promise<any> {

    if(value==null)return Promise.resolve("NA")

    const num = Number(value);
    let tenantConfig:TenantConfig  =JSON.parse(localStorage.getItem("tenantConfig")?? this.defaultConfig);

    switch(args[0]){
      case Constant.CURRENCY_ROUNDOFF : 
            return Promise.resolve( formatNumber(num,'en-US',`1.${tenantConfig.roundingFormat.priceRounding}-${tenantConfig.roundingFormat.priceRounding}`));
      case Constant.UOM_ROUNDOFF:  
            return Promise.resolve( formatNumber(num,'en-US',`1.${tenantConfig.roundingFormat.priceRounding}-${tenantConfig.roundingFormat.priceRounding}`));
      default: return Promise.resolve(value)
    }
  }
}
