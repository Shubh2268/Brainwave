import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
      <img src={notification1} alt="image" width={62} height={62} className="rounded-xl" />
    </div>
  )
}

export default Notification;
