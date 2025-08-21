import { useSearchParams } from "next/navigation";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

const PaymentSuccess: React.FC = () => {
  const searchParams = useSearchParams();
  const referenceNum = searchParams ? searchParams.get("reference") : null;

  const { data: user, isLoading, isError } = useLoadUserQuery(null);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading user data</div>;

  return (
    <div className="h-[100vh] flex-row items-center justify-center">
      <h1 className="text-5xl text-center items-center">Order Successful</h1>
      <h2 className="text-2xl text-center items-center">
        Reference No. {referenceNum ? referenceNum : "N/A"}
      </h2>
    </div>
  );
};

export default PaymentSuccess;
