import { useEffect } from "react";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const useReverseGeo = (coordinate, dispatch) => {
  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `${BASE_URL}?latitude=${coordinate.lat}&longitude=${coordinate.lng}&localityLanguage=zh`
      );
      const data = await res.json();

      dispatch({
        type: "country/load",
        payload: {
          countryName: data.countryName,
          city: data.city,
          locality: data.locality,
        },
      });
    };

    fetchCountryData();
  }, [coordinate.lat, coordinate.lng, dispatch]);

  return;
};

export default useReverseGeo;
