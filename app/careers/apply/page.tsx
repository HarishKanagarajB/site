import ApplyClient from "@/app/components/Applyclient";
import Applyclient from "@/app/components/Applyclient";
import AxiosInstance from "@/app/utils/axiosInstance";

export const dynamic = "force-static"; // force SSG even if dynamic content

async function getCareerData() {
  const res = await AxiosInstance.get("career/");
  return res.data;
}

export default async function ContactPage() {
  const careers = await getCareerData();

  return <ApplyClient careers={careers} />;
}
