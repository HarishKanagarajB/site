import HomeClient from "./components/HomeClient";
import AxiosInstance from "./utils/axiosInstance";

export default async function HomePage() {
  try {
    const [clientsRes, testimonialRes, serviceRes, solutionRes] = await Promise.all([
      AxiosInstance.get("client/"),
      AxiosInstance.get("testmonial/"),
      AxiosInstance.get("service-v2/"),
      AxiosInstance.get("solution-v2/"),
    ]);

    return (
      <HomeClient
        clients={clientsRes.data}
        testimonials={testimonialRes.data}
        services={serviceRes.data}
        solutions={solutionRes.data}
      />
    );
  } catch (error) {
    return <div>Error loading content</div>;
  }
}
