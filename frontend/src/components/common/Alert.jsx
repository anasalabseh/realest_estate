import { useSelector } from "react-redux";
import { alertsSelector } from "../../store/alert/alertSlice";

const Alert = () => {
  const alerts = useSelector(alertsSelector);

  return (
    <>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => {
          return (
            <div key={alert.id} className={`alert alert--${alert.alertType}`}>
              {alert.msg}
            </div>
          );
        })}
    </>
  );
};

export default Alert;
