import ClaypotDetail from "../../component/claypotdetail/ClaypotDetail";
import { useParams } from "react-router-dom";
import BestsellingPots from "../../component/bestSellingPots/Bestsellingpots";

const ClaypotDetailPage = () => {
	const { claypot_id } = useParams();
	console.log("ID from URL parameters:", claypot_id);
	return (
		<div>
			<ClaypotDetail claypot_id={claypot_id} />
			<BestsellingPots />
		</div>
	);
};

export default ClaypotDetailPage;
