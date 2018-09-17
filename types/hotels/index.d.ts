

interface IWeather {
  title:          string;
  icon:           string;
  water:          number;
  temperature:    number;
}

interface ISocial {
  title:          string;
  img:            string;
  followers:      number;
  following:      number;
}

interface IHotel {
  img1:           string;
  img2:           string;
  img3:           string;
  address:        string;
  phone:          number;   // дополнительно задание pipe для форматирования
  weather:        IWeather;
  social_info:    ISocial;
  type:           string;
}
