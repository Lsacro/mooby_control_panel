import MetricBar from '../cards/MetricBar';
import MetricNumber from '../cards/MetricNumber';

const list = [
  {
    title: 'Por Entregar',
    icon: 'local_shipping',
    value: '2',
    span: 'pedidos hoy',
    porcentage: '20',
    textPrimary: '#02394e ',
    bgContainer: '#e5eeff  ',
  },
  {
    title: 'Entregados',
    icon: 'check_circle',
    value: '8',
    span: 'completados',
    porcentage: '80',
    textPrimary: '#006C4B',
    bgContainer: '#8af4c3   ',
  },
];

const list2 = [
  {
    tittle: 'Cobranza',
    icon: 'verified',
    value: '94%',
    span: 'al dia',
    text: '3 cuentas por cobrar',
    textPrimary: '#02394e',
    bgContainer: '#93eee8 ',
  },
  {
    tittle: 'Ventas del día',
    icon: 'payments',
    value: '$30.75',
    span: '',
    text: 'USD acumulado',
    textPrimary: '#006C4B',
    bgContainer: '#8af4c3 ',
  },
];

export default function MetricsCards() {
  return (
    <>
      {list.map((item, index) => (
        <MetricBar
          key={index}
          title={item.title}
          icon={item.icon}
          value={item.value}
          span={item.span}
          porcentage={item.porcentage}
          textPrimary={item.textPrimary}
          bgContainer={item.bgContainer}
        />
      ))}

      {list2.map((item, index) => (
        <MetricNumber
          key={index}
          title={item.tittle}
          icon={item.icon}
          value={item.value}
          span={item.span}
          porcentage={item.porcentage}
          textPrimary={item.textPrimary}
          bgContainer={item.bgContainer}
          text={item.text}
        />
      ))}
    </>
  );
}
