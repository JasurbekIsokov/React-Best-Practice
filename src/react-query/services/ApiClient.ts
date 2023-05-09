import axios from "axios";

const axiosInstnce = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const getData = await axiosInstnce
      .get<T>(this.endpoint)
      .then((res) => res.data);

    return getData;
  };
}

export default ApiClient;
