import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public calculateTamb(tax: number, amout: number, time: number): any {

    const tamb = tax;
    const capital = amout;
    const timing = time;
    const days = 365;

    // Cálculo corrigido
    const cashBack = (capital * timing * tamb) / (days * 100);

    // Retenção de 10%
    const rendimentoLiquido = cashBack * 0.90;
    const valorFinal = capital + rendimentoLiquido;

    return {
      taxa: tamb,
      capital: capital,
      dias: timing,
      IAC: "10%",
      valor_bruto: this.currency(cashBack),
      valor_liquido: this.currency(rendimentoLiquido),
      mensagem: `O valor de ${this.currency(capital)} aplicado a uma taxa de ${tamb}% por ${timing} dias, resulta em um retorno líquido de ${this.currency(valorFinal)}.`
    };
  }

  private currency(value: number): string {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    }).format(value);
  }

}
