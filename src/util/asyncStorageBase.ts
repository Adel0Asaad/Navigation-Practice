import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 *
 * @param key string that represents the entry-key of the value that you're trying to store
 * @param value value of type T
 *
 */
export const setData = async <T>(key: string, value: T) => {
    try {
      const valueToStore = JSON.stringify(value)
      await AsyncStorage.setItem(key, valueToStore)
    } catch (err) {
      console.log(err);
    }
  };
  
  /**
   *
   * @param key string that represents the entry-key of the value that you're trying to retrieve
   * @returns value stored in async storage as a Promise<T>
   */
  export const getData = async <T>(key: string) => {
    try {
      const valueJSON = await AsyncStorage.getItem(key);
      if (valueJSON) {
        const value: T = JSON.parse(valueJSON);
        return value;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };