import Contactclient from "../components/Contactclient";
import AxiosInstance from "../utils/axiosInstance";

export default async function ContactPage() {
  const res = await AxiosInstance.get("settings/84");
  const settingsData = res.data;

  return <Contactclient settingsData={settingsData} />;
}
