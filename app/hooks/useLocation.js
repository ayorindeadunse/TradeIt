import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  // Get the user's current location
  const getLocaton = async () => {
    try {
      // destructure the props to add a property "granted" to include the logic of what
      // should happen if location accessibility has been granted.
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return; // If permission is not granted, do nothing.
      // else, get the latitude and longitude and store in an object coords with 2 props,
      // latitude and longitude

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync(); // this function is called instead of
      // getCurrentPositionAsync() as there might be a slight performance dip
      // so in order to manage user performance we use getLastKnownPositionAsync() instead
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocaton();
  }, []);
  return location;
};
