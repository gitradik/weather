type Images = 'flag' | 'icon';

const url = process.env.REACT_APP_OPENWEATHERMAP_URL;

export function useImageUrl(type: Images) {
  switch(type) {
    case 'flag': return function (country: string) {
      return `${url}/images/flags/${country.toLowerCase()}.png`;
    };
    case 'icon': return function (iconcode: string) {
      return `${url}/img/w/${iconcode}.png`;
    }
  }
}
