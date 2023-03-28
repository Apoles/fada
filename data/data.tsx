type params = {
  id: string;
  title: string;
  imgUrl: string;

  description: string;
  car: car[];
};

type car = {
  id: number;
  carTitle: string;
  imgUrl: string;
  prop: prop2[];
  custom?: string;
};

type prop2 = {
  title: string;
  des: string;
};

export const transferCar: params = {
  id: '1',
  title: "TRANSFER CART & AGV'S",
  description: 'tanıtım tanıtım tanıtım',
  imgUrl: 'string',
  car: [
    {
      id: 1,
      carTitle: 'MULTIDIRECTIONAL STEERING BATTERY POWERED TRANSFER CART (MTC)',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [
        { title: 'Capacity', des: '5 ton to 100 tons' },
        { title: 'Speed', des: ' Up to 30 m/min' },
        { title: 'Steering', des: ' All-Wheel steering' },
        { title: 'Movements', des: '360° rotation (Carousel) and crab movement (horizontal and diagonal movements)' },
        { title: 'WheelType', des: ' Rubber / Polyurethane' },
        { title: 'Control', des: 'Remote control / Autonomous' },
        { title: 'PowerSource', des: 'Battery, Diesel' },
        { title: '       Motors', des: 'PMAC / AC high efficiency motors' },
        { title: 'LoadingTable', des: ' On request' },
        { title: 'Security', des: 'Laser and ultrasonic sensors, bumpers' },
        { title: 'Dimension', des: 'On request' },
        { title: 'Certification', des: 'OHS regulations EN standards CE certificated' },
      ],
    },

    {
      id: 2,
      carTitle: 'RAIL TRANSFER CART (RTC)',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [
        { title: 'Capacity', des: '1 ton to 200 tons' },
        { title: 'Speed', des: ' Up to 60 m/min' },
        { title: 'WheelType', des: 'Steel / Casting wheel' },
        { title: 'Control', des: 'Remote control / Autonomous' },
        { title: 'PowerSource', des: 'Spring drum, Bus-Bar, Cable carrier, Battery, Diesel' },
        { title: 'Motors', des: 'AC / DC electric motor, Hydraulic / Pneumatic actuator' },
        { title: 'LoadingTable', des: ' On request' },
        { title: 'Security', des: 'Laser and ultrasonic sensors, bumpers' },
        { title: 'Dimension', des: 'On request' },
        { title: 'Certification', des: 'OHS regulations EN standards CE certificated' },
      ],
    },
    {
      id: 3,
      carTitle: 'CUSTOM TRANSFER SOLUTIONS (CTS)',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [
        { title: 'Capacity', des: '1 ton to 200 tons' },
        { title: 'Speed', des: ' Up to 60 m/min' },
        { title: 'WheelType', des: 'Steel / Casting wheel' },
        { title: 'Control', des: 'Remote control / Autonomous' },
        { title: 'PowerSource', des: 'Spring drum, Bus-Bar, Cable carrier, Battery, Diesel' },
        { title: 'Motors', des: 'AC / DC electric motor, Hydraulic / Pneumatic actuator' },
        { title: 'LoadingTable', des: ' On request' },
        { title: 'Security', des: 'Laser and ultrasonic sensors, bumpers' },
        { title: 'Dimension', des: 'On request' },
        { title: 'Certification', des: 'OHS regulations EN standards CE certificated' },
      ],
    },
    {
      id: 4,
      carTitle: 'FRONT WHEEL STEERING BATTERY POWERED TRANSFER CART (FTC)',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [],
      custom: 'çözüm cart curt',
    },
  ],
};
export const transferCar2: params = {
  id: '2',
  title: 'denemes',
  description: 'tanıtım tanıtım tanıtım',
  imgUrl: 'string',
  car: [
    {
      id: 1,
      carTitle: 'bir STEERING BATTERY POWERED TRANSFER CART (MTC)',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [
        { title: 'Capacity', des: '5 ton to 100 tons' },
        { title: 'Speed', des: ' Up to 30 m/min' },
        { title: 'Steering', des: ' All-Wheel steering' },
        { title: 'Movements', des: '360° rotation (Carousel) and crab movement (horizontal and diagonal movements)' },
        { title: 'WheelType', des: ' Rubber / Polyurethane' },
        { title: 'Control', des: 'Remote control / Autonomous' },
        { title: 'PowerSource', des: 'Battery, Diesel' },
        { title: '       Motors', des: 'PMAC / AC high efficiency motors' },
        { title: 'LoadingTable', des: ' On request' },
        { title: 'Security', des: 'Laser and ultrasonic sensors, bumpers' },
        { title: 'Dimension', des: 'On request' },
        { title: 'Certification', des: 'OHS regulations EN standards CE certificated' },
      ],
    },
    {
      id: 2,
      carTitle: 'ikinci',
      imgUrl: 'https://www.fada.com.tr/yuklenen/urunler/1643270409/k-1643270409-16443301208636.jpg',
      prop: [
        { title: 'Capacity', des: '25 ton to 100 tons' },
        { title: 'Speed', des: ' Up 2to 30 m/min' },
        { title: 'Steering', des: ' All-Wheel steering' },
        { title: 'Movements', des: '180° rotation (Carousel) and crab movement (horizontal and diagonal movements)' },
        { title: 'WheelType', des: ' Rubber / Polyurethane' },
        { title: 'Control', des: 'Remote control / Autonomous' },
        { title: 'PowerSource', des: 'Battery, Diesel' },
        { title: '       Motors', des: 'PMAC / AC high efficiency motors' },
        { title: 'LoadingTable', des: ' On request' },
        { title: 'Security', des: 'Laser and ultrasonic sensors, bumpers' },
        { title: 'Dimension', des: 'On request' },
        { title: 'Certification', des: 'OHS regulations EN standards CE certificated' },
      ],
    },
  ],
};

export const AllData = [transferCar, transferCar2];
